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
} from 'react-native';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { colors } from '../../theme/appTheme';
import { styles } from './Login.style';
import { loginValidation, registerValidation } from '../../utils';
import { useAuth } from '../../store';
import { Loading } from '../Loading';

interface GoogleError extends Error {
	code: string;
}

type FormData = {
	email: string;
	name: string;
	password: string;
	passwordRepeat: string;
};

const LoginForm = () => {
	const [user, setUser] = useState<User>();
	const [register, setRegister] = useState(false);
	const { loginUser, registerUser, removeError, errorMessage, loading: loadingAuth } = useAuth();

	const schemaValidation = register ? registerValidation : loginValidation;

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

	// eslint-disable-next-line no-console
	console.log({ user });

	useEffect(() => {
		GoogleSignin.configure({
			iosClientId: '263541006661-ocgn0aiqes01haj7g3bauml5macjftsb.apps.googleusercontent.com',
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
			setUser(userInfo);
		} catch (error) {
			const err = error as GoogleError;
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
						uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1668386696/sportika/pfpymxklxfewegnjixys.png',
					}}
					style={styles.logo}
				/>
				<Text style={styles.title}>{register ? 'Register' : 'Login'}</Text>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>Email</Text>
					<Controller
						control={control}
						name="email"
						render={({ field: { value, onChange, onBlur } }) => (
							<TextInput
								style={styles.input}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
							/>
						)}
						rules={{ required: true }}
					/>
					<Text style={styles.errorText}>{errors.email?.message}</Text>
				</View>
				{register && (
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Name</Text>
						<Controller
							control={control}
							name="name"
							render={({ field: { value, onChange, onBlur } }) => (
								<TextInput
									style={styles.input}
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
								/>
							)}
						/>
						<Text style={styles.errorText}>{errors.name?.message}</Text>
					</View>
				)}
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Password</Text>
					<Controller
						control={control}
						name="password"
						render={({ field: { value, onChange, onBlur } }) => (
							<TextInput
								style={styles.input}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
							/>
						)}
					/>
					<Text style={styles.errorText}>{errors.password?.message}</Text>
				</View>
				{register && (
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Repeat Password</Text>
						<Controller
							control={control}
							name="passwordRepeat"
							render={({ field: { value, onChange, onBlur } }) => (
								<TextInput
									style={styles.input}
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
								/>
							)}
						/>
						<Text style={styles.errorText}>{errors.passwordRepeat?.message}</Text>
					</View>
				)}
				<View style={styles.textContainer}>
					<Text>{register ? 'Have an account?' : `Don't have an account?`} </Text>
					<TouchableOpacity activeOpacity={0.7} onPress={toggleRegister}>
						<Text style={styles.link}>{register ? 'Log in here' : 'Sign Up'}</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSubmit(submit)}>
					<Text style={styles.buttonText}>{register ? 'Register' : 'Login'}</Text>
					<Icon name={'arrow-forward-outline'} size={20} color={colors.white} />
				</TouchableOpacity>
				<View style={styles.socialAuthContainer}>
					<TouchableOpacity style={styles.googleButtonContainer} onPress={signIn}>
						<Image
							source={{
								uri: 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1668115137/sportika/wez1kupfuekqo38xew84.png',
							}}
							style={styles.googleIcon}
						/>
						<Text style={styles.googleLabel}>Sign in with Google</Text>
					</TouchableOpacity>
				</View>
				<Loading modalVisible={loadingAuth} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default LoginForm;
