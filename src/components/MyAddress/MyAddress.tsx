import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useUser } from '../../store/user/hooks';

import { colors } from '../../theme/appTheme';
import { styles } from './MyAddress.style';

const MyAddress = () => {
	const { shippingAddress } = useUser();

	return (
		<>
			{shippingAddress ? (
				<View style={styles.container}>
					<View style={styles.addressContainer}>
						<View style={styles.row}>
							<Text style={styles.addressHeader}>Delivery Address</Text>
							<TouchableOpacity>
								<Text style={styles.editText}>Edit</Text>
							</TouchableOpacity>
						</View>
						<Text
							style={styles.addressText}
						>{`${shippingAddress?.firstName} ${shippingAddress?.lastName}`}</Text>
						<Text style={styles.addressText}>{`${shippingAddress?.address}`}</Text>
						<Text
							style={styles.addressText}
						>{`${shippingAddress?.city}, ${shippingAddress?.zip}`}</Text>
						<Text style={styles.addressText}>{`${shippingAddress?.country}`}</Text>
						<Text
							style={styles.addressText}
						>{`${shippingAddress?.code}, ${shippingAddress?.phone}`}</Text>
					</View>
				</View>
			) : (
				<View style={styles.containerNoAddress}>
					<TouchableOpacity style={styles.button} activeOpacity={0.7}>
						<Text style={styles.buttonText}>Add address</Text>
						<Icon name={'arrow-forward-outline'} size={20} color={colors.white} />
					</TouchableOpacity>
				</View>
			)}
		</>
	);
};

export default MyAddress;
