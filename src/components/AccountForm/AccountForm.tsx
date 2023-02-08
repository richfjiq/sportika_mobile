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

import { IUserDataUpdate } from '../../interfaces';
import { useAuth } from '../../store';
import { userDataValidation } from '../../utils';
import { styles } from './AccountForm.style';
import { colors } from '../../theme/appTheme';
import {
	responsiveFontSize,
	responsiveInputHeight,
	responsiveIcon,
	responsiveIconContainer,
} from '../../utils/styles';

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
}

interface Passwords extends Object {
	currentPassword: boolean;
	newPassword: boolean;
	newPassword2: boolean;
}

const AccountForm = ({ visible, setVisible }: Props) => {
	const { width } = useWindowDimensions();
	const { loading, user, updateUserData } = useAuth();
	const [showPassword, setShowPassword] = useState<Passwords>({
		currentPassword: false,
		newPassword: false,
		newPassword2: false,
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
		setValue,
		resetField,
	} = useForm<IUserDataUpdate>({
		defaultValues: {
			name: '',
			email: '',
			currentPassword: '',
		},
		resolver: yupResolver(userDataValidation),
		shouldUseNativeValidation: true,
	});

	useEffect(() => {
		if (user) {
			setValue('name', user.name);
			setValue('email', user.email);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	useEffect(() => {
		resetField('currentPassword', { keepTouched: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible]);

	const submit = async (data: IUserDataUpdate): Promise<void> => {
		if (!user) return;
		const { name, email, currentPassword } = data;

		if (name === user.name && email === user.email) {
			setVisible(!visible);
			return;
		}

		await updateUserData({
			userId: user._id,
			name,
			email,
			currentPassword,
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
						<Text style={{ ...styles.headerTitle, ...responsiveFontSize(18, width) }}>
							Update User Data
						</Text>
					</View>
					<View style={styles.formContainer}>
						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Name</Text>
						<Controller
							control={control}
							name="name"
							render={({ field: { value, onChange, onBlur } }) => (
								<TextInput
									style={{
										...styles.input,
										...responsiveFontSize(16, width),
										...responsiveInputHeight(40, width),
									}}
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
								/>
							)}
							rules={{ required: true }}
						/>
						<Text style={{ ...styles.errorText, ...responsiveFontSize(12, width) }}>
							{errors.name?.message}
						</Text>

						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>email</Text>
						<Controller
							control={control}
							name="email"
							render={({ field: { value, onChange, onBlur } }) => (
								<TextInput
									style={{
										...styles.input,
										...responsiveFontSize(16, width),
										...responsiveInputHeight(40, width),
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

						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>
							Current Password
						</Text>
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
							rules={{ required: true }}
						/>
						<Text style={{ ...styles.errorText, ...responsiveFontSize(12, width) }}>
							{errors.currentPassword?.message}
						</Text>

						<TouchableOpacity
							style={styles.cancelButton}
							activeOpacity={0.7}
							onPress={() => setVisible(!visible)}
							disabled={loading}
						>
							<Text style={{ ...styles.buttonText, ...responsiveFontSize(14, width) }}>Cancel</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							activeOpacity={0.7}
							onPress={handleSubmit(submit)}
						>
							{loading ? (
								<ActivityIndicator color={colors.white} size="small" />
							) : (
								<Text style={{ ...styles.buttonText, ...responsiveFontSize(14, width) }}>
									Update
								</Text>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default AccountForm;
