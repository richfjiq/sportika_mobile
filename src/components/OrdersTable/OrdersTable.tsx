import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import { useCart, useOrders } from '../../store';
import { styles } from './OrdersTable.style';
import { responsiveFontSize } from '../../utils';

const OrdersTable = () => {
	const { width } = useWindowDimensions();
	const navigator = useNavigation();
	const { allOrders } = useOrders();
	const { setOrderId } = useCart();

	const goToOrder = (orderId: string) => {
		setOrderId(orderId);
		navigator.navigate('UserStack' as never, { screen: 'PayOrder' } as never);
	};

	const orderStatus = (time: number, status: boolean) => {
		if (time >= 2 && status === false) return 'Canceled';
		if (!status) return 'Pending';
		return 'Paid';
	};

	const styleStatus = (time: number, status: boolean) => {
		if (time >= 2 && status === false) return styles.textCanceled;
		if (!status) return styles.textPending;
		return styles.textPaid;
	};

	return (
		<View style={{ marginBottom: 50 }}>
			{(allOrders ?? []).map((order, i) => {
				const today = new Date();
				const date = new Date(order.updatedAt as string);
				const days = moment(today).diff(moment(date), 'days');

				return (
					<View key={order._id} style={styles.rowContainer}>
						<View style={styles.orderContainer}>
							<Text style={{ ...styles.text, ...responsiveFontSize(14, width) }}>{i + 1}</Text>
						</View>
						<View style={styles.statusContainer}>
							<Text
								style={{ ...styleStatus(days, order?.isPaid), ...responsiveFontSize(14, width) }}
							>
								{orderStatus(days, order?.isPaid)}
							</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={{ ...styles.text, ...responsiveFontSize(14, width) }}>
								{moment(date).format('DD-MM-YYYY')}
							</Text>
						</View>
						<View style={styles.detailsContainer}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => goToOrder(order._id as string)}
							>
								<Text style={{ ...styles.buttonText, ...responsiveFontSize(14, width) }}>See</Text>
							</TouchableOpacity>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default OrdersTable;
