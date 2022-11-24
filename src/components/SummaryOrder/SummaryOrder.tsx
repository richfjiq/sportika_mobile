import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { useCart, useUser } from '../../store';
import { currencyFormat, TAX_RATE } from '../../utils';
import { styles } from './SummaryOrder.style';

interface Props {
	checkout?: boolean;
}

const SummaryOrder = ({ checkout = false }: Props) => {
	const { numberOfItems, subTotal, tax, total } = useCart();
	const { shippingAddress } = useUser();
	const navigator = useNavigation();

	const goToCheckout = () => {
		navigator.navigate('CartStack' as never, { screen: 'Checkout' } as never);
	};

	const goToCart = () => {
		navigator.navigate('CartStack' as never, { screen: 'ShoppingCart' } as never);
	};

	// const goToLogin = () => {};

	const clientName = `${shippingAddress?.firstName as string} ${
		shippingAddress?.lastName as string
	}`;
	const address = `${shippingAddress?.address as string}`;
	const city = `${shippingAddress?.city as string} ${shippingAddress?.zip as string}`;
	const country = `${shippingAddress?.country as string}`;
	const phone = `${shippingAddress?.code as string} ${shippingAddress?.phone as string}`;

	const renderAddress = () => {
		if (!checkout) return;
		if (shippingAddress) {
			return (
				<>
					<View style={styles.rowHeader}>
						<Text style={styles.orderTitleAddress}>Delivery Address</Text>
						<TouchableOpacity>
							<Text style={styles.removeText}>Edit</Text>
						</TouchableOpacity>
					</View>
					<Text style={styles.orderTextAddress}>{clientName}</Text>
					<Text style={styles.orderTextAddress}>{address}</Text>
					<Text style={styles.orderTextAddress}>{city}</Text>
					<Text style={styles.orderTextAddress}>{country}</Text>
					<Text style={styles.orderTextAddress}>{phone}</Text>
				</>
			);
		} else {
			return (
				<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToCheckout}>
					<Text style={styles.buttonText}>Add Address</Text>
				</TouchableOpacity>
			);
		}
	};

	return (
		<View style={styles.checkoutContainer}>
			{renderAddress()}

			{!checkout && <Text style={styles.orderTitle}>Order</Text>}

			<View style={styles.separator} />
			{checkout && (
				<View style={styles.rowHeader}>
					<Text style={styles.billText}>Bill</Text>
					<TouchableOpacity onPress={goToCart}>
						<Text style={styles.removeText}>Edit</Text>
					</TouchableOpacity>
				</View>
			)}
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

			<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToCheckout}>
				<Text style={styles.buttonText}>{checkout ? 'Confirm Order' : 'Checkout'}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SummaryOrder;
