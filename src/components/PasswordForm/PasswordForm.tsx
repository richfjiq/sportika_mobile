/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Modal, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IUserPasswordUpdate } from '../../interfaces';
import { useAuth } from '../../store';
import { userPasswordValidation } from '../../utils';
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
						backgroundColor: 'white',
						width: '100%',
					}}
				>
					<View style={styles.headerContainer}>
						<Text style={styles.headerTitle}>Update Password</Text>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.label}>Current Password</Text>
						<Controller
							control={control}
							name="currentPassword"
							render={({ field: { value, onChange, onBlur } }) => (
								<View>
									<TextInput
										style={styles.input}
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										secureTextEntry={!showPassword['currentPassword']}
									/>
									<View style={styles.iconContainer}>
										<TouchableOpacity onPress={() => passwordVisible('currentPassword')}>
											{showPassword['currentPassword'] ? (
												<Icon name={'eye-off-outline'} size={25} color={colors.black} />
											) : (
												<Icon name={'eye-outline'} size={25} color={colors.black} />
											)}
										</TouchableOpacity>
									</View>
								</View>
							)}
							rules={{ required: true }}
						/>
						<Text style={styles.errorText}>{errors.currentPassword?.message}</Text>

						<Text style={styles.label}>New Password</Text>
						<Controller
							control={control}
							name="newPassword"
							render={({ field: { value, onChange, onBlur } }) => (
								<View>
									<TextInput
										style={styles.input}
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										secureTextEntry={!showPassword['newPassword']}
									/>
									<View style={styles.iconContainer}>
										<TouchableOpacity onPress={() => passwordVisible('newPassword')}>
											{showPassword['newPassword'] ? (
												<Icon name={'eye-off-outline'} size={25} color={colors.black} />
											) : (
												<Icon name={'eye-outline'} size={25} color={colors.black} />
											)}
										</TouchableOpacity>
									</View>
								</View>
							)}
							rules={{ required: true }}
						/>
						<Text style={styles.errorText}>{errors.newPassword?.message}</Text>

						<Text style={styles.label}>Repeat Password</Text>
						<Controller
							control={control}
							name="repeatPassword"
							render={({ field: { value, onChange, onBlur } }) => (
								<View>
									<TextInput
										style={styles.input}
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										secureTextEntry={!showPassword['repeatPassword']}
									/>
									<View style={styles.iconContainer}>
										<TouchableOpacity onPress={() => passwordVisible('repeatPassword')}>
											{showPassword['repeatPassword'] ? (
												<Icon name={'eye-off-outline'} size={25} color={colors.black} />
											) : (
												<Icon name={'eye-outline'} size={25} color={colors.black} />
											)}
										</TouchableOpacity>
									</View>
								</View>
							)}
							rules={{ required: true }}
						/>
						<Text style={styles.errorText}>{errors.repeatPassword?.message}</Text>

						<TouchableOpacity
							style={styles.cancelButton}
							activeOpacity={0.7}
							onPress={() => setVisible(!visible)}
							disabled={loading}
						>
							<Text style={styles.buttonText}>Cancel</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							activeOpacity={0.7}
							onPress={handleSubmit(submit)}
						>
							{loading ? (
								<ActivityIndicator color={colors.white} size="small" />
							) : (
								<Text style={styles.buttonText}>Update</Text>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default PasswordForm;
