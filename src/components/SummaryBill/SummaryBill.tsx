import { View, Text } from 'react-native';
import { useOrders } from '../../store';

import { currencyFormat, TAX_RATE } from '../../utils';
import { styles } from './SummaryBill.style';

const SummaryBill = () => {
	const { order } = useOrders();

	if (!order) return null;

	const { shippingAddress, numberOfItems, subTotal, tax, total } = order;

	const clientName = `${shippingAddress.firstName} ${shippingAddress.lastName}`;
	const address = shippingAddress.address;
	const city = `${shippingAddress.city}, ${shippingAddress.state as string}, ${
		shippingAddress.zip
	}`;
	const country = shippingAddress.country;
	const phone = shippingAddress.phone;

	return (
		<View style={styles.checkoutContainer}>
			<Text style={styles.orderTitleAddress}>Delivery Address</Text>
			<Text style={styles.orderTextAddress}>{clientName}</Text>
			<Text style={styles.orderTextAddress}>{address}</Text>
			<Text style={styles.orderTextAddress}>{city}</Text>
			<Text style={styles.orderTextAddress}>{country}</Text>
			<Text style={styles.orderTextAddress}>{phone}</Text>

			<View style={styles.separator} />

			<Text style={styles.billText}>Bill</Text>

			<View style={styles.rowContainer}>
				<Text style={styles.orderText}>Items</Text>
				<Text style={styles.orderText}>{numberOfItems}</Text>
			</View>
			<View style={styles.rowContainer}>
				<Text style={styles.orderText}>Subtotal</Text>
				<Text style={styles.orderText}>{currencyFormat(subTotal)}</Text>
			</View>
			<View style={styles.rowContainer}>
				<Text style={styles.orderText}>Tax ({Number(TAX_RATE) * 100} %)</Text>
				<Text style={styles.orderText}>{currencyFormat(tax)}</Text>
			</View>
			<View style={styles.rowContainer}>
				<Text style={styles.totalText}>Total</Text>
				<Text style={styles.totalText}>{currencyFormat(total)}</Text>
			</View>
		</View>
	);
};

export default SummaryBill;
