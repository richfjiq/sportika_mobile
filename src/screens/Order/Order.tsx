import { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PaymentStatus, ProductsOrder, SummaryBill } from '../../components';
import { useCart, useOrders } from '../../store';
import { styles } from './Order.style';

const Order = () => {
	const { orderId } = useCart();
	const { top } = useSafeAreaInsets();
	const { order, getOrderById } = useOrders();

	useEffect(() => {
		if (orderId) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getOrderById(orderId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderId]);

	return (
		<ScrollView style={{ paddingTop: top, ...styles.container }}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Order: </Text>
				<Text style={styles.titleBold}> {orderId}</Text>
			</View>
			<PaymentStatus isPaid={order?.isPaid as boolean} />
			<ProductsOrder />
			<SummaryBill />
		</ScrollView>
	);
};

export default Order;
