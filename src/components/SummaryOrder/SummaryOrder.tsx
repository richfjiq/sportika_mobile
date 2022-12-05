import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth, useCart, useUser } from '../../store';
import { currencyFormat, TAX_RATE } from '../../utils';
import { AddressModal } from '../AddressModal';
import { styles } from './SummaryOrder.style';
import { useState } from 'react';
import { AddressForm } from '../AddressForm';
import { Loading } from '../Loading';

interface Props {
	checkout?: boolean;
}

const SummaryOrder = ({ checkout = false }: Props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [modalFormVisible, setModalFormVisible] = useState(false);
	const { numberOfItems, subTotal, tax, total, loading, createOrder } = useCart();
	const { shippingAddress } = useUser();
	const { user } = useAuth();
	const navigator = useNavigation();

	const goToCheckout = async () => {
		if (checkout) {
			if (!shippingAddress) return setIsVisible(!isVisible);
			await createOrder();
			navigator.navigate('CartStack' as never, { screen: 'Order' } as never);
			return;
		}
		navigator.navigate('CartStack' as never, { screen: 'Checkout' } as never);
	};

	const goToCart = () => {
		navigator.navigate('CartStack' as never, { screen: 'ShoppingCart' } as never);
	};

	const onAddAddress = () => {
		if (!user) return setIsVisible(!isVisible);

		setModalFormVisible(!modalFormVisible);
	};

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
						<TouchableOpacity onPress={() => setModalFormVisible(!modalFormVisible)}>
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
				<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onAddAddress}>
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

			<AddressModal visible={isVisible} setVisible={setIsVisible} />
			<AddressForm visible={modalFormVisible} setVisible={setModalFormVisible} />
			<Loading modalVisible={loading} />
		</View>
	);
};

export default SummaryOrder;
