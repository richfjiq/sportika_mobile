/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Alert,
	useWindowDimensions,
} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Config from 'react-native-config';

import { colors } from '../../theme/appTheme';
import { styles } from './Login.style';
import {
	loginValidation,
	logoHeader,
	registerValidation,
	responsiveFontSize,
	responsiveIcon,
	responsiveInputHeight,
	googleBtnCont,
	responsiveIconContainer,
} from '../../utils';
import { useAuth } from '../../store';
import { Loading } from '../Loading';

const googleClientId = Config.GOOGLE_CLIENT_ID;
const androidClientId = Config.ANDROID_CLIENT_ID;

interface GoogleError extends Error {
	code: string;
}

type FormData = {
	email: string;
	name: string;
	password: string;
	passwordRepeat: string;
};

interface Passwords extends Object {
	password: boolean;
	passwordRepeat: boolean;
}

const LoginForm = () => {
	const { width } = useWindowDimensions();
	const [register, setRegister] = useState(false);
	const [showPassword, setShowPassword] = useState<Passwords>({
		password: false,
		passwordRepeat: false,
	});
	const {
		loginUser,
		registerUser,
		removeError,
		googleAuthentication,
		errorMessage,
		loading: loadingAuth,
	} = useAuth();

	const schemaValidation = register ? registerValidation : loginValidation;

	const passwordVisible = (key: string) => {
		setShowPassword((prevState) => ({
			...prevState,
			[key]: !showPassword[key as keyof Passwords],
		}));
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			email: '',
			name: '',
			password: '',
			passwordRepeat: '',
		},
		resolver: yupResolver(schemaValidation),
	});

	const toggleRegister = () => setRegister(!register);

	useEffect(() => {
		GoogleSignin.configure({
			webClientId: androidClientId,
			offlineAccess: false,
			iosClientId: googleClientId,
		});
	}, []);

	useEffect(() => {
		if (!errorMessage || errorMessage === 'Auth token is not valid.') {
			return removeError();
		}

		Alert.alert('Login failed', errorMessage, [
			{
				text: 'Ok',
				onPress: removeError,
			},
		]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errorMessage]);

	const signIn = async (): Promise<void> => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			await googleAuthentication(userInfo.idToken as string);
			// const userInfo = await GoogleSignin.signOut();
		} catch (error) {
			const err = error as GoogleError;
			// eslint-disable-next-line no-console
			console.log({ err });
			if (err.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (err.code === statusCodes.IN_PROGRESS) {
				// operation (e.g. sign in) is in progress already
			} else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
			} else {
				// some other error happened
			}
		}
	};

	const submit = async (data: FormData): Promise<void> => {
		const { email, name, password } = data;
		if (register) {
			await registerUser(email, password, name);
		}
		await loginUser(email, password);
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<Image
					source={{
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1672172814/sportika/umqc76hrwnckyxwwiy2z.png',
					}}
					style={{ ...styles.logo, ...logoHeader(200, 110, width) }}
				/>
				<Text style={{ ...styles.title, ...responsiveFontSize(20, width) }}>
					{register ? 'Register' : 'Login'}
				</Text>

				<View style={styles.inputContainer}>
					<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Email</Text>
					<Controller
						control={control}
						name="email"
						render={({ field: { value, onChange, onBlur } }) => (
							<TextInput
								style={{
									...styles.input,
									...responsiveInputHeight(40, width),
									...responsiveFontSize(16, width),
								}}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
							/>
						)}
						rules={{ required: true }}
					/>
					<Text style={{ ...styles.errorText, ...responsiveFontSize(12, width) }}>
						{errors.email?.message}
					</Text>
				</View>
				{register && (
					<View style={styles.inputContainer}>
						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Name</Text>
						<Controller
							control={control}
							name="name"
							render={({ field: { value, onChange, onBlur } }) => (
								<TextInput
									style={{
										...styles.input,
										...responsiveInputHeight(40, width),
										...responsiveFontSize(16, width),
									}}
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
								/>
							)}
						/>
						<Text style={{ ...styles.errorText, ...responsiveFontSize(12, width) }}>
							{errors.name?.message}
						</Text>
					</View>
				)}
				<View style={styles.inputContainer}>
					<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Password</Text>
					<Controller
						control={control}
						name="password"
						render={({ field: { value, onChange, onBlur } }) => (
							<View>
								<TextInput
									style={{
										...styles.input,
										...responsiveInputHeight(40, width),
										...responsiveFontSize(16, width),
									}}
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
									secureTextEntry={!showPassword['password']}
								/>
								<View
									style={{ ...styles.iconContainer, ...responsiveIconContainer(40, 50, width) }}
								>
									<TouchableOpacity onPress={() => passwordVisible('password')}>
										{showPassword['password'] ? (
											<Icon
												name={'eye-off-outline'}
												size={responsiveIcon(25, width)}
												color={colors.black}
											/>
										) : (
											<Icon
												name={'eye-outline'}
												size={responsiveIcon(25, width)}
												color={colors.black}
											/>
										)}
									</TouchableOpacity>
								</View>
							</View>
						)}
					/>
					<Text style={{ ...styles.errorText, ...responsiveFontSize(12, width) }}>
						{errors.password?.message}
					</Text>
				</View>
				{register && (
					<View style={styles.inputContainer}>
						<Text
							style={{
								...styles.label,
								...responsiveFontSize(16, width),
								...responsiveFontSize(16, width),
							}}
						>
							Repeat Password
						</Text>
						<Controller
							control={control}
							name="passwordRepeat"
							render={({ field: { value, onChange, onBlur } }) => (
								<View>
									<TextInput
										style={{
											...styles.input,
											...responsiveInputHeight(40, width),
											...responsiveFontSize(16, width),
										}}
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										secureTextEntry={!showPassword['passwordRepeat']}
									/>
									<View
										style={{ ...styles.iconContainer, ...responsiveIconContainer(40, 50, width) }}
									>
										<TouchableOpacity onPress={() => passwordVisible('passwordRepeat')}>
											{showPassword['passwordRepeat'] ? (
												<Icon
													name={'eye-off-outline'}
													size={responsiveIcon(25, width)}
													color={colors.black}
												/>
											) : (
												<Icon
													name={'eye-outline'}
													size={responsiveIcon(25, width)}
													color={colors.black}
												/>
											)}
										</TouchableOpacity>
									</View>
								</View>
							)}
						/>
						<Text style={{ ...styles.errorText, ...responsiveFontSize(12, width) }}>
							{errors.passwordRepeat?.message}
						</Text>
					</View>
				)}
				<View style={styles.textContainer}>
					<Text style={{ ...styles.accountText, ...responsiveFontSize(12, width) }}>
						{register ? 'Have an account?' : `Don't have an account?`}{' '}
					</Text>
					<TouchableOpacity activeOpacity={0.7} onPress={toggleRegister}>
						<Text style={{ ...styles.link, ...responsiveFontSize(12, width) }}>
							{register ? 'Log in here' : 'Sign Up'}
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSubmit(submit)}>
					<Text style={{ ...styles.buttonText, ...responsiveFontSize(14, width) }}>
						{register ? 'Register' : 'Login'}
					</Text>
					<Icon
						name={'arrow-forward-outline'}
						size={responsiveIcon(20, width)}
						color={colors.white}
					/>
				</TouchableOpacity>
				<View style={styles.socialAuthContainer}>
					<TouchableOpacity
						style={{ ...styles.googleButtonContainer, ...googleBtnCont(45, width) }}
						onPress={signIn}
					>
						<Image
							source={{
								uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1668115137/sportika/wez1kupfuekqo38xew84.png',
							}}
							style={{ ...styles.googleIcon, ...logoHeader(30, 30, width) }}
						/>
						<Text style={{ ...styles.googleLabel, ...responsiveFontSize(16, width) }}>
							Sign in with Google
						</Text>
					</TouchableOpacity>
				</View>
				<Loading modalVisible={loadingAuth} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default LoginForm;
