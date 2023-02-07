import { View, Text, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useOrders } from '../../store';

import { styles } from './PaymentStatus.style';
import { colors } from '../../theme/appTheme';
import { responsiveFontSize, responsiveIcon } from '../../utils';

interface Props {
	isPaid: boolean;
	timeInDays?: number;
}

const PaymentStatus = ({ isPaid = false, timeInDays = 0 }: Props) => {
	const { width } = useWindowDimensions();
	const { order } = useOrders();

	if (!order) return null;

	if (timeInDays >= 2 && !isPaid) {
		return (
			<View style={styles.statusCanceled}>
				<Icon
					name={'alert-circle-outline'}
					size={responsiveIcon(25, width)}
					color={colors.greyText}
				/>
				<Text style={{ ...styles.textCanceled, ...responsiveFontSize(14, width) }}>
					Order Canceled
				</Text>
			</View>
		);
	}

	return (
		<View style={isPaid ? styles.statusPaid : styles.statusPending}>
			<Icon
				name={'card-outline'}
				size={responsiveIcon(25, width)}
				color={isPaid ? colors.green : colors.red}
			/>
			<Text
				style={
					isPaid
						? { ...styles.textPaid, ...responsiveFontSize(14, width) }
						: { ...styles.textPending, ...responsiveFontSize(14, width) }
				}
			>
				{isPaid ? 'Order Paid' : 'Pending Payment'}
			</Text>
		</View>
	);
};

export default PaymentStatus;
