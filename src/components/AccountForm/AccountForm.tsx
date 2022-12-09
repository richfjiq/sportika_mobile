/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Modal, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IUserUpdate } from '../../interfaces';
import { useAuth } from '../../store';
import { userDataValidation } from '../../utils';
import { styles } from './AccountForm.style';
import { colors } from '../../theme/appTheme';
import { Loading } from '../Loading';

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
	const { loading, user, updateUser } = useAuth();
	const { top } = useSafeAreaInsets();
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
	} = useForm<IUserUpdate>({
		defaultValues: {
			name: '',
			email: '',
			currentPassword: '',
			newPassword: '',
			newPassword2: '',
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

	const submit = async (data: IUserUpdate): Promise<void> => {
		if (!user) return;
		const { name, email, currentPassword, newPassword, newPassword2 } = data;

		await updateUser({
			userId: user._id,
			name,
			email,
			currentPassword,
			newPassword,
			newPassword2,
		});

		setVisible(!visible);
	};

	return (
		<Modal animationType="fade" transparent={false} visible={visible}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<View style={{ flex: 1, paddingTop: top }}>
					<View style={styles.headerContainer}>
						<Text style={styles.headerTitle}>Update User Data</Text>
						<TouchableOpacity onPress={() => setVisible(!visible)}>
							<Icon name={'close-outline'} size={28} color={colors.black} />
						</TouchableOpacity>
					</View>
					<View style={styles.formContainer}>
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
							rules={{ required: true }}
						/>
						<Text style={styles.errorText}>{errors.name?.message}</Text>

						<Text style={styles.label}>email</Text>
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
							name="newPassword2"
							render={({ field: { value, onChange, onBlur } }) => (
								<View>
									<TextInput
										style={styles.input}
										value={value}
										onChangeText={onChange}
										onBlur={onBlur}
										secureTextEntry={!showPassword['newPassword2']}
									/>
									<View style={styles.iconContainer}>
										<TouchableOpacity onPress={() => passwordVisible('newPassword2')}>
											{showPassword['newPassword2'] ? (
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
						<Text style={styles.errorText}>{errors.newPassword2?.message}</Text>

						<TouchableOpacity
							style={styles.cancelButton}
							activeOpacity={0.7}
							onPress={() => setVisible(!visible)}
						>
							<Text style={styles.buttonText}>Cancel</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							activeOpacity={0.7}
							onPress={handleSubmit(submit)}
						>
							<Text style={styles.buttonText}>Update User Data</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
			<Loading modalVisible={loading} />
		</Modal>
	);
};

export default AccountForm;
