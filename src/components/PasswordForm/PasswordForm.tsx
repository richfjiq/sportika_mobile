/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import {
	View,
	Text,
	Modal,
	TouchableOpacity,
	TextInput,
	ActivityIndicator,
	useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IUserPasswordUpdate } from '../../interfaces';
import { useAuth } from '../../store';
import {
	responsiveFontSize,
	responsiveInputHeight,
	userPasswordValidation,
	responsiveIconContainer,
	responsiveIcon,
} from '../../utils';
import { styles } from './PasswordForm.style';
import { colors } from '../../theme/appTheme';

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
}

interface Passwords extends Object {
	currentPassword: boolean;
	newPassword: boolean;
	repeatPassword: boolean;
}

const PasswordForm = ({ visible, setVisible }: Props) => {
	const { width } = useWindowDimensions();
	const { loading, user, updateUserPassword } = useAuth();
	const [showPassword, setShowPassword] = useState<Passwords>({
		currentPassword: false,
		newPassword: false,
		repeatPassword: false,
	});

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
		resetField,
	} = useForm<IUserPasswordUpdate>({
		defaultValues: {
			currentPassword: '',
			newPassword: '',
			repeatPassword: '',
		},
		resolver: yupResolver(userPasswordValidation),
		shouldUseNativeValidation: true,
	});

	useEffect(() => {
		resetField('currentPassword', { keepTouched: true });
		resetField('newPassword', { keepTouched: true });
		resetField('repeatPassword', { keepTouched: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible]);

	const submit = async (data: IUserPasswordUpdate): Promise<void> => {
		if (!user) return;
		const { currentPassword, newPassword, repeatPassword } = data;

		await updateUserPassword({
			userId: user._id,
			currentPassword,
			newPassword,
			repeatPassword,
		});

		setVisible(!visible);
	};

	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View
				style={{
					flex: 1,
					backgroundColor: 'rgba(0, 0, 0, 0.4)',
					justifyContent: 'center',
					alignItems: 'center',
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						borderRadius: 10,
						backgroundColor: colors.cultured,
						width: '100%',
					}}
				>
					<View style={styles.headerContainer}>
						<Text style={{ ...styles.headerTitle, ...responsiveFontSize(16, width) }}>
							Update Password
						</Text>
					</View>
					<View style={styles.formContainer}>
						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>
							Current Password
						</Text>
						<View>
							<Controller
								control={control}
								name="currentPassword"
								render={({ field: { value, onChange, onBlur } }) => (
									<View>
										<TextInput
											style={{
												...styles.input,
												...responsiveFontSize(16, width),
												...responsiveInputHeight(40, width),
											}}
											value={value}
											onChangeText={onChange}
											onBlur={onBlur}
											secureTextEntry={!showPassword['currentPassword']}
										/>
										<View
											style={{ ...styles.iconContainer, ...responsiveIconContainer(40, 50, width) }}
										>
											<TouchableOpacity onPress={() => passwordVisible('currentPassword')}>
												{showPassword['currentPassword'] ? (
													<Icon
														name={'eye-off-outline'}
														size={responsiveIcon(25, width)}
														color={colors.darkCharcoal}
													/>
												) : (
													<Icon
														name={'eye-outline'}
														size={responsiveIcon(25, width)}
														color={colors.darkCharcoal}
													/>
												)}
											</TouchableOpacity>
										</View>
									</View>
								)}
								rules={{ required: true }}
							/>
							<Text style={{ ...styles.errorText, ...responsiveFontSize(14, width) }}>
								{errors.currentPassword?.message}
							</Text>
						</View>

						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>New Password</Text>
						<View>
							<Controller
								control={control}
								name="newPassword"
								render={({ field: { value, onChange, onBlur } }) => (
									<View>
										<TextInput
											style={{
												...styles.input,
												...responsiveFontSize(16, width),
												...responsiveInputHeight(40, width),
											}}
											value={value}
											onChangeText={onChange}
											onBlur={onBlur}
											secureTextEntry={!showPassword['newPassword']}
										/>
										<View
											style={{ ...styles.iconContainer, ...responsiveIconContainer(40, 50, width) }}
										>
											<TouchableOpacity onPress={() => passwordVisible('newPassword')}>
												{showPassword['newPassword'] ? (
													<Icon
														name={'eye-off-outline'}
														size={responsiveIcon(25, width)}
														color={colors.darkCharcoal}
													/>
												) : (
													<Icon
														name={'eye-outline'}
														size={responsiveIcon(25, width)}
														color={colors.darkCharcoal}
													/>
												)}
											</TouchableOpacity>
										</View>
									</View>
								)}
								rules={{ required: true }}
							/>
							<Text style={{ ...styles.errorText, ...responsiveFontSize(14, width) }}>
								{errors.newPassword?.message}
							</Text>
						</View>

						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>
							Repeat Password
						</Text>
						<View>
							<Controller
								control={control}
								name="repeatPassword"
								render={({ field: { value, onChange, onBlur } }) => (
									<View>
										<TextInput
											style={{
												...styles.input,
												...responsiveFontSize(16, width),
												...responsiveInputHeight(40, width),
											}}
											value={value}
											onChangeText={onChange}
											onBlur={onBlur}
											secureTextEntry={!showPassword['repeatPassword']}
										/>
										<View
											style={{ ...styles.iconContainer, ...responsiveIconContainer(40, 50, width) }}
										>
											<TouchableOpacity onPress={() => passwordVisible('repeatPassword')}>
												{showPassword['repeatPassword'] ? (
													<Icon
														name={'eye-off-outline'}
														size={responsiveIcon(25, width)}
														color={colors.darkCharcoal}
													/>
												) : (
													<Icon
														name={'eye-outline'}
														size={responsiveIcon(25, width)}
														color={colors.darkCharcoal}
													/>
												)}
											</TouchableOpacity>
										</View>
									</View>
								)}
								rules={{ required: true }}
							/>
							<Text style={{ ...styles.errorText, ...responsiveFontSize(14, width) }}>
								{errors.repeatPassword?.message}
							</Text>
						</View>
						<TouchableOpacity
							style={styles.button}
							activeOpacity={0.7}
							onPress={handleSubmit(submit)}
						>
							{loading ? (
								<ActivityIndicator color={colors.white} size="small" />
							) : (
								<Text style={{ ...styles.buttonText, ...responsiveFontSize(16, width) }}>
									Update
								</Text>
							)}
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.cancelButton}
							activeOpacity={0.7}
							onPress={() => setVisible(!visible)}
							disabled={loading}
						>
							<Text style={{ ...styles.buttonText, ...responsiveFontSize(16, width) }}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default PasswordForm;
