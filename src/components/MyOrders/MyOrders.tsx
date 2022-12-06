import { View, Text, ScrollView } from 'react-native';
import { useOrders } from '../../store';
import { OrdersTable } from '../OrdersTable';

import { styles } from './MyOrders.style';

const MyOrders = () => {
	const { allOrders } = useOrders();
	const pendingPayment = (allOrders || []).find((order) => order.isPaid === false);

	return (
		<ScrollView style={styles.container}>
			{allOrders && pendingPayment && (
				<View style={styles.warningContainer}>
					<Text style={styles.warningText}>You only have 48 hours to pay your order.</Text>
				</View>
			)}
			<View style={styles.rowContainer}>
				<View style={styles.orderContainer}>
					<Text style={styles.headerText}>Order</Text>
				</View>
				<View style={styles.statusContainer}>
					<Text style={styles.headerText}>Status</Text>
				</View>
				<View style={styles.dateContainer}>
					<Text style={styles.headerText}>Date</Text>
				</View>
				<View style={styles.detailsContainer}>
					<Text style={styles.headerText}>Details</Text>
				</View>
			</View>
			<OrdersTable />
		</ScrollView>
	);
};

export default MyOrders;
