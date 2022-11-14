import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { styles } from './Login.style';

interface GoogleError extends Error {
	code: string;
}

const LoginForm = () => {
	const [user, setUser] = useState<User>();
	const [register, setRegister] = useState(false);

	// eslint-disable-next-line no-console
	console.log({ user });

	const toggleRegister = () => setRegister(!register);

	useEffect(() => {
		GoogleSignin.configure({
			iosClientId: '263541006661-ocgn0aiqes01haj7g3bauml5macjftsb.apps.googleusercontent.com',
		});
	}, []);

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

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView>
				<Text style={styles.title}>{register ? 'Register' : 'Login'}</Text>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Email</Text>
					<TextInput style={styles.input} />
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Password</Text>
					<TextInput style={styles.input} />
				</View>
				{register && (
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Repeat Password</Text>
						<TextInput style={styles.input} />
					</View>
				)}
				<TouchableOpacity style={styles.textContainer} activeOpacity={0.7} onPress={toggleRegister}>
					<Text style={styles.link}>{register ? 'Login' : `Don't have an account ?`}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} activeOpacity={0.7}>
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
			</KeyboardAvoidingView>
		</View>
	);
};

export default LoginForm;
