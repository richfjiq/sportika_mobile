import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import { useCart, useOrders } from '../../store';
import { styles } from './OrdersTable.style';

const OrdersTable = () => {
	const navigator = useNavigation();
	const { allOrders } = useOrders();
	const { setOrderId } = useCart();

	const goToOrder = (orderId: string) => {
		setOrderId(orderId);
		navigator.navigate('UserStack' as never, { screen: 'PayOrder' } as never);
	};

	return (
		<View style={{ marginBottom: 50 }}>
			{(allOrders ?? []).map((order, i) => {
				const date = new Date(order.updatedAt as string);

				return (
					<View key={order._id} style={styles.rowContainer}>
						<View style={styles.orderContainer}>
							<Text style={styles.text}>{i + 1}</Text>
						</View>
						<View style={styles.statusContainer}>
							<Text style={order?.isPaid ? styles.textPaid : styles.textPending}>
								{order?.isPaid ? 'Paid' : 'Pending'}
							</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={styles.text}>{moment(date).format('DD-MM-YYYY')}</Text>
						</View>
						<View style={styles.detailsContainer}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => goToOrder(order._id as string)}
							>
								<Text style={styles.buttonText}>See</Text>
							</TouchableOpacity>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default OrdersTable;
