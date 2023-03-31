import { useState } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useUser } from '../../store';
import { colors } from '../../theme/appTheme';
import { responsiveFontSize, responsiveIcon } from '../../utils';
import { AddressForm } from '../AddressForm';
import { styles } from './MyAddress.style';

const MyAddress = () => {
	const { width } = useWindowDimensions();
	const { shippingAddress } = useUser();
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			{shippingAddress ? (
				<View style={styles.container}>
					<View style={styles.addressContainer}>
						<View style={styles.row}>
							<Text style={{ ...styles.addressHeader, ...responsiveFontSize(16, width) }}>
								Delivery Address
							</Text>
							<TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
								<Text style={{ ...styles.editText, ...responsiveFontSize(14, width) }}>Edit</Text>
							</TouchableOpacity>
						</View>
						<Text
							style={{ ...styles.addressText, ...responsiveFontSize(16, width) }}
						>{`${shippingAddress?.firstName} ${shippingAddress?.lastName}`}</Text>
						<Text
							style={{ ...styles.addressText, ...responsiveFontSize(16, width) }}
						>{`${shippingAddress?.address}`}</Text>
						<Text
							style={{ ...styles.addressText, ...responsiveFontSize(16, width) }}
						>{`${shippingAddress?.city}, ${shippingAddress?.state}, ${shippingAddress?.zip}`}</Text>
						<Text
							style={{ ...styles.addressText, ...responsiveFontSize(16, width) }}
						>{`${shippingAddress?.country}`}</Text>
						<Text
							style={{ ...styles.addressText, ...responsiveFontSize(16, width) }}
						>{`${shippingAddress?.code} ${shippingAddress?.phone}`}</Text>
					</View>
				</View>
			) : (
				<View style={styles.containerNoAddress}>
					<TouchableOpacity
						style={styles.button}
						activeOpacity={0.7}
						onPress={() => setIsVisible(!isVisible)}
					>
						<Text style={{ ...styles.buttonText, ...responsiveFontSize(16, width) }}>
							Add address
						</Text>
						<Icon
							name={'arrow-forward-outline'}
							size={responsiveIcon(20, width)}
							color={colors.cultured}
						/>
					</TouchableOpacity>
				</View>
			)}
			<AddressForm visible={isVisible} setVisible={setIsVisible} />
		</>
	);
};

export default MyAddress;
