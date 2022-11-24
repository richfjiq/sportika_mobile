import { View, Text, TouchableOpacity } from 'react-native';
import { useCart } from '../../store';

import { currencyFormat, TAX_RATE } from '../../utils';
import { styles } from './Checkout.style';

const Checkout = () => {
	const { numberOfItems, subTotal, tax, total } = useCart();
	return (
		<View style={styles.checkoutContainer}>
			<Text style={styles.orderTitle}>Order</Text>
			<View style={styles.separator} />
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

			<TouchableOpacity style={styles.button} activeOpacity={0.7}>
				<Text style={styles.buttonText}>Checkout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Checkout;
