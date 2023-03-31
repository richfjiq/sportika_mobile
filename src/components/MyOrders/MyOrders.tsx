import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useOrders } from '../../store';
import { colors } from '../../theme/appTheme';
import { OrdersTable } from '../OrdersTable';
import { styles } from './MyOrders.style';
import { responsiveFontSize, responsiveIcon } from '../../utils';

const MyOrders = () => {
	const { width } = useWindowDimensions();
	const { allOrders } = useOrders();
	const pendingPayment = (allOrders || []).find((order) => order.isPaid === false);
	const orders = allOrders || [];

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			{pendingPayment && (
				<View style={styles.warningContainer}>
					<Text style={{ ...styles.warningText, ...responsiveFontSize(14, width) }}>
						You only have 48 hours to pay your order.
					</Text>
				</View>
			)}
			{orders.length === 0 ? (
				<View style={styles.noOrders}>
					<Icon
						name={'reader-outline'}
						size={responsiveIcon(25, width)}
						color={colors.darkCharcoal}
					/>
					<Text style={{ ...styles.noOrdersText, ...responsiveFontSize(18, width) }}>
						{' '}
						No Orders
					</Text>
				</View>
			) : (
				<>
					<View style={styles.rowContainer}>
						<View style={styles.orderContainer}>
							<Text style={{ ...styles.headerText, ...responsiveFontSize(16, width) }}>Order</Text>
						</View>
						<View style={styles.statusContainer}>
							<Text style={{ ...styles.headerText, ...responsiveFontSize(16, width) }}>Status</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={{ ...styles.headerText, ...responsiveFontSize(16, width) }}>Date</Text>
						</View>
						<View style={styles.detailsContainer}>
							<Text style={{ ...styles.headerText, ...responsiveFontSize(16, width) }}>
								Details
							</Text>
						</View>
					</View>
					<OrdersTable />
				</>
			)}
		</ScrollView>
	);
};

export default MyOrders;
