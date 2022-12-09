import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Modal,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';

import { ShippingAddress } from '../../interfaces';
import { useAuth, useUser } from '../../store';
import { colors } from '../../theme/appTheme';
import { addressValidation } from '../../utils';
import { styles } from './AddressForm.style';

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
}

const AddressForm = ({ visible, setVisible }: Props) => {
	const { shippingAddress, createUserAddress, updateUserAddress } = useUser();
	const { user } = useAuth();
	const { top } = useSafeAreaInsets();

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<ShippingAddress>({
		defaultValues: {
			firstName: '',
			lastName: '',
			address: '',
			zip: '',
			city: '',
			state: '',
			country: '',
			code: '',
			phone: '',
		},
		resolver: yupResolver(addressValidation),
		shouldUseNativeValidation: true,
	});

	useEffect(() => {
		if (shippingAddress) {
			setValue('firstName', shippingAddress.firstName);
			setValue('lastName', shippingAddress.lastName);
			setValue('address', shippingAddress.address);
			setValue('zip', shippingAddress.zip);
			setValue('city', shippingAddress.city);
			setValue('state', shippingAddress.state);
			setValue('country', shippingAddress.country);
			setValue('code', shippingAddress.code);
			setValue('phone', shippingAddress.phone);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [shippingAddress]);

	const submit = async (data: ShippingAddress): Promise<void> => {
		if (!user) return;

		const address = {
			user: user?._id,
			...data,
		};

		if (shippingAddress) {
			await updateUserAddress(address);
			setVisible(!visible);
			return;
		}

		await createUserAddress(address);

		setVisible(!visible);
	};

	return (
		<Modal animationType="fade" transparent={false} visible={visible}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<ScrollView
					style={{ paddingTop: top, ...styles.container }}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.headerContainer}>
						<Text style={styles.headerTitle}>
							{shippingAddress ? 'Update Address' : 'Add Address'}
						</Text>
						<TouchableOpacity onPress={() => setVisible(!visible)}>
							<Icon name={'close-outline'} size={28} color={colors.black} />
						</TouchableOpacity>
					</View>

					<View style={styles.formContainer}>
						<Text style={styles.label}>Name</Text>
						<Controller
							control={control}
							name="firstName"
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
						<Text style={styles.errorText}>{errors.firstName?.message}</Text>

						<Text style={styles.label}>Last Name</Text>
						<Controller
							control={control}
							name="lastName"
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
						<Text style={styles.errorText}>{errors.lastName?.message}</Text>

						<Text style={styles.label}>Address</Text>
						<Controller
							control={control}
							name="address"
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
						<Text style={styles.errorText}>{errors.address?.message}</Text>

						<View style={styles.inputsRow}>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Zip Code</Text>
								<Controller
									control={control}
									name="zip"
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
								<Text style={styles.errorText}>{errors.zip?.message}</Text>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>City</Text>
								<Controller
									control={control}
									name="city"
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
								<Text style={styles.errorText}>{errors.city?.message}</Text>
							</View>
						</View>

						<View style={styles.inputsRow}>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>State</Text>
								<Controller
									control={control}
									name="state"
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
								<Text style={styles.errorText}>{errors.state?.message}</Text>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Country</Text>
								<Controller
									control={control}
									name="country"
									render={({ field: { value, onChange } }) => (
										<SelectList
											defaultOption={{ key: value, value }}
											setSelected={(val: string) => onChange(val)}
											data={[
												{ key: 'CANADA', value: 'CANADA' },
												{ key: 'MEXICO', value: 'MEXICO' },
												{ key: 'US', value: 'US' },
											]}
											boxStyles={styles.selectInput}
										/>
									)}
									rules={{ required: true }}
								/>
								<Text style={styles.errorText}>{errors.country?.message}</Text>
							</View>
						</View>

						<View style={styles.inputsRow}>
							<View style={styles.inputContainer}>
								<Text style={styles.label}>Code</Text>
								<Controller
									control={control}
									name="code"
									render={({ field: { value, onChange } }) => (
										<SelectList
											defaultOption={{ key: value, value }}
											setSelected={(val: string) => onChange(val)}
											data={[
												{ key: '+1', value: '+1' },
												{ key: '+52', value: '+52' },
											]}
											boxStyles={styles.selectInput}
										/>
									)}
									rules={{ required: true }}
								/>
								<Text style={styles.errorText}>{errors.code?.message}</Text>
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.label}>Phone</Text>
								<Controller
									control={control}
									name="phone"
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
								<Text style={styles.errorText}>{errors.phone?.message}</Text>
							</View>
						</View>

						<TouchableOpacity
							style={styles.button}
							activeOpacity={0.7}
							onPress={handleSubmit(submit)}
						>
							<Text style={styles.buttonText}>
								{shippingAddress ? 'Update Address' : 'Save Address'}
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
			{/* <Loading modalVisible={loading} /> */}
		</Modal>
	);
};

export default AddressForm;
