import { View, Text, useWindowDimensions } from 'react-native';
import { useOrders } from '../../store';

import { currencyFormat, responsiveFontSize, TAX_RATE } from '../../utils';
import { styles } from './SummaryBill.style';

const SummaryBill = () => {
	const { width } = useWindowDimensions();
	const { order } = useOrders();

	if (!order) return null;

	const { shippingAddress, numberOfItems, subTotal, tax, total } = order;

	const clientName = `${shippingAddress.firstName} ${shippingAddress.lastName}`;
	const address = shippingAddress.address;
	const city = `${shippingAddress.city}, ${shippingAddress.state}, ${shippingAddress.zip}`;
	const country = shippingAddress.country;
	const phone = shippingAddress.phone;

	return (
		<View style={styles.checkoutContainer}>
			<Text style={{ ...styles.orderTitleAddress, ...responsiveFontSize(16, width) }}>
				Delivery Address
			</Text>
			<Text style={{ ...styles.orderTextAddress, ...responsiveFontSize(15, width) }}>
				{clientName}
			</Text>
			<Text style={{ ...styles.orderTextAddress, ...responsiveFontSize(15, width) }}>
				{address}
			</Text>
			<Text style={{ ...styles.orderTextAddress, ...responsiveFontSize(15, width) }}>{city}</Text>
			<Text style={{ ...styles.orderTextAddress, ...responsiveFontSize(15, width) }}>
				{country}
			</Text>
			<Text style={{ ...styles.orderTextAddress, ...responsiveFontSize(15, width) }}>{phone}</Text>

			<View style={styles.separator} />

			<Text style={{ ...styles.billText, ...responsiveFontSize(16, width) }}>Bill</Text>

			<View style={styles.rowContainer}>
				<Text style={{ ...styles.orderText, ...responsiveFontSize(15, width) }}>Items</Text>
				<Text style={{ ...styles.orderText, ...responsiveFontSize(15, width) }}>
					{numberOfItems}
				</Text>
			</View>
			<View style={styles.rowContainer}>
				<Text style={{ ...styles.orderText, ...responsiveFontSize(15, width) }}>Subtotal</Text>
				<Text style={{ ...styles.orderText, ...responsiveFontSize(15, width) }}>
					{currencyFormat(subTotal)}
				</Text>
			</View>
			<View style={styles.rowContainer}>
				<Text style={{ ...styles.orderText, ...responsiveFontSize(15, width) }}>
					Tax ({Number(TAX_RATE) * 100} %)
				</Text>
				<Text style={{ ...styles.orderText, ...responsiveFontSize(15, width) }}>
					{currencyFormat(tax)}
				</Text>
			</View>
			<View style={styles.rowContainer}>
				<Text style={{ ...styles.totalText, ...responsiveFontSize(15, width) }}>Total</Text>
				<Text style={{ ...styles.totalText, ...responsiveFontSize(15, width) }}>
					{currencyFormat(total)}
				</Text>
			</View>
		</View>
	);
};

export default SummaryBill;
