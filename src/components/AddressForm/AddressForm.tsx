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
	ActivityIndicator,
	Platform,
	useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import { isEqual } from 'lodash';

import { ShippingAddress } from '../../interfaces';
import { useAuth, useUser } from '../../store';
import { colors } from '../../theme/appTheme';
import {
	addressValidation,
	responsiveFontSize,
	responsiveIcon,
	responsiveInputHeight,
} from '../../utils';
import { styles } from './AddressForm.style';

interface Props {
	visible: boolean;
	setVisible: (value: boolean) => void;
}

const AddressForm = ({ visible, setVisible }: Props) => {
	const { width } = useWindowDimensions();
	const { shippingAddress, loading, createUserAddress, updateUserAddress } = useUser();
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
			_id: shippingAddress?._id,
			user: user?._id,
			...data,
		};

		if (isEqual(shippingAddress, address)) {
			setVisible(!visible);
			return;
		}

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
					style={{ paddingTop: Platform.OS === 'ios' ? top : 10, ...styles.container }}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.headerContainer}>
						<Text style={{ ...styles.headerTitle, ...responsiveFontSize(18, width) }}>
							{shippingAddress ? 'Update Address' : 'Add Address'}
						</Text>
						<TouchableOpacity onPress={() => setVisible(!visible)}>
							<Icon name={'close-outline'} size={responsiveIcon(28, width)} color={colors.black} />
						</TouchableOpacity>
					</View>

					<View style={styles.formContainer}>
						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Name</Text>
						<Controller
							control={control}
							name="firstName"
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
						<Text style={styles.errorText}>{errors.firstName?.message}</Text>

						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Last Name</Text>
						<Controller
							control={control}
							name="lastName"
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
						<Text style={styles.errorText}>{errors.lastName?.message}</Text>

						<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Address</Text>
						<Controller
							control={control}
							name="address"
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
						<Text style={styles.errorText}>{errors.address?.message}</Text>

						<View style={styles.inputsRow}>
							<View style={styles.inputContainer}>
								<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Zip Code</Text>
								<Controller
									control={control}
									name="zip"
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
								<Text style={styles.errorText}>{errors.zip?.message}</Text>
							</View>

							<View style={styles.inputContainer}>
								<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>City</Text>
								<Controller
									control={control}
									name="city"
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
								<Text style={styles.errorText}>{errors.city?.message}</Text>
							</View>
						</View>

						<View style={styles.inputsRow}>
							<View style={styles.inputContainer}>
								<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>State</Text>
								<Controller
									control={control}
									name="state"
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
								<Text style={styles.errorText}>{errors.state?.message}</Text>
							</View>

							<View style={styles.inputContainer}>
								<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Country</Text>
								<Controller
									control={control}
									name="country"
									render={({ field: { value, onChange } }) => (
										<SelectList
											searchPlaceholder="Select"
											defaultOption={{ key: value, value }}
											setSelected={(val: string) => onChange(val)}
											data={[
												{ key: 'CANADA', value: 'CANADA' },
												{ key: 'MEXICO', value: 'MEXICO' },
												{ key: 'US', value: 'US' },
											]}
											boxStyles={{
												...styles.selectInput,
												...responsiveInputHeight(40, width),
											}}
											inputStyles={responsiveFontSize(16, width)}
											dropdownTextStyles={responsiveFontSize(16, width)}
											search={false}
										/>
									)}
									rules={{ required: true }}
								/>
								<Text style={styles.errorText}>{errors.country?.message}</Text>
							</View>
						</View>

						<View style={styles.inputsRow}>
							<View style={styles.inputContainer}>
								<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Code</Text>
								<Controller
									control={control}
									name="code"
									render={({ field: { value, onChange } }) => (
										<SelectList
											searchPlaceholder="Select"
											defaultOption={{ key: value, value }}
											setSelected={(val: string) => onChange(val)}
											data={[
												{ key: '+1', value: '+1' },
												{ key: '+52', value: '+52' },
											]}
											boxStyles={{
												...styles.selectInput,
												...responsiveInputHeight(40, width),
											}}
											search={false}
											inputStyles={responsiveFontSize(16, width)}
											dropdownTextStyles={responsiveFontSize(16, width)}
										/>
									)}
									rules={{ required: true }}
								/>
								<Text style={styles.errorText}>{errors.code?.message}</Text>
							</View>

							<View style={styles.inputContainer}>
								<Text style={{ ...styles.label, ...responsiveFontSize(16, width) }}>Phone</Text>
								<Controller
									control={control}
									name="phone"
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
								<Text style={styles.errorText}>{errors.phone?.message}</Text>
							</View>
						</View>

						<TouchableOpacity
							style={styles.button}
							activeOpacity={0.7}
							onPress={handleSubmit(submit)}
							disabled={loading}
						>
							{loading ? (
								<ActivityIndicator size="small" color={colors.white} />
							) : (
								<Text style={{ ...styles.buttonText, ...responsiveFontSize(14, width) }}>
									{shippingAddress ? 'Update Address' : 'Save Address'}
								</Text>
							)}
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
			{/* <Loading modalVisible={loading} /> */}
		</Modal>
	);
};

export default AddressForm;
