import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useOrders } from '../../store';

import { colors } from '../../theme/appTheme';
import { styles } from './PaymentStatus.style';

interface Props {
	isPaid: boolean;
	timeInDays?: number;
}

const PaymentStatus = ({ isPaid = false, timeInDays = 0 }: Props) => {
	const { order } = useOrders();

	if (!order) return null;

	if (timeInDays >= 2 && !isPaid) {
		return (
			<View style={styles.statusCanceled}>
				<Icon name={'alert-circle-outline'} size={25} color={colors.greyText} />
				<Text style={styles.textCanceled}>Order Canceled</Text>
			</View>
		);
	}

	return (
		<View style={isPaid ? styles.statusPaid : styles.statusPending}>
			<Icon name={'card-outline'} size={25} color={isPaid ? colors.green : colors.red} />
			<Text style={isPaid ? styles.textPaid : styles.textPending}>
				{isPaid ? 'Order Paid' : 'Pending Payment'}
			</Text>
		</View>
	);
};

export default PaymentStatus;
