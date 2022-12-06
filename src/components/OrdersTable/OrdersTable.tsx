import moment from 'moment';
import { View, Text, TouchableOpacity } from 'react-native';
import { useOrders } from '../../store';

import { styles } from './OrdersTable.style';

const OrdersTable = () => {
	const { allOrders } = useOrders();

	return (
		<>
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
							<TouchableOpacity style={styles.button}>
								<Text style={styles.buttonText}>See</Text>
							</TouchableOpacity>
						</View>
					</View>
				);
			})}
		</>
	);
};

export default OrdersTable;
