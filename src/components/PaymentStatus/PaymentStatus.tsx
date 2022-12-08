import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useOrders } from '../../store';

import { colors } from '../../theme/appTheme';
import { styles } from './PaymentStatus.style';

interface Props {
	isPaid: boolean;
}

const PaymentStatus = ({ isPaid = false }: Props) => {
	const { order } = useOrders();

	if (!order) return null;

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
