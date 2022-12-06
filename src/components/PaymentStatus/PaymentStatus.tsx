import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/appTheme';
import { styles } from './PaymentStatus.style';

interface Props {
	isPaid: boolean;
}

const PaymentStatus = ({ isPaid = false }: Props) => {
	return (
		<View style={isPaid ? styles.statusPaid : styles.statusPending}>
			<Icon name={'card-outline'} size={25} color={isPaid ? colors.green : colors.red} />
			<Text style={isPaid ? styles.textPaid : styles.textPending}>
				{isPaid ? 'Paid Order' : 'Pending Payment'}
			</Text>
		</View>
	);
};

export default PaymentStatus;
