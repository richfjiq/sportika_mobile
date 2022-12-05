import { StackScreenProps } from '@react-navigation/stack';
import {
	initPaymentSheet,
	presentPaymentSheet,
	retrievePaymentIntent,
} from '@stripe/stripe-react-native';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { Loading, PaymentStatus, ProductsOrder, SummaryBill } from '../../components';
import { CartStackParams } from '../../navigation/CartStackNav';
import { useCart, useOrders } from '../../store';
import { colors } from '../../theme/appTheme';
import { fetchPaymentSheetParams } from '../../utils';
import { styles } from './Order.style';

interface Props extends StackScreenProps<CartStackParams, 'Order'> {}

interface Params {
	customer: string;
	ephemeralKey: string;
	paymentIntent: string;
}

const Order = ({ navigation }: Props) => {
	const [clientSecret, setClientSecret] = useState('');
	const [loading, setLoading] = useState(false);
	const { orderId } = useCart();
	const { top } = useSafeAreaInsets();
	const { order, getOrderById, loading: loadingOrder } = useOrders();

	// eslint-disable-next-line no-console
	console.log({ loading });

	const initializePaymentSheet = async (id: string) => {
		try {
			const data = await fetchPaymentSheetParams(id);
			const { customer, ephemeralKey, paymentIntent } = data as Params;
			setClientSecret(paymentIntent);

			const { error } = await initPaymentSheet({
				merchantDisplayName: 'Sportika Shop.',
				customerId: customer,
				customerEphemeralKeySecret: ephemeralKey,
				paymentIntentClientSecret: paymentIntent,
				allowsDelayedPaymentMethods: true,
				defaultBillingDetails: {
					name: 'Jane Doe',
				},
			});

			if (!error) {
				setLoading(true);
			}
		} catch (error) {
			setLoading(false);
			Alert.alert('Error', 'Server Error.');
		}
	};

	const openPaymentSheet = async () => {
		if (!clientSecret) return;
		const { error } = await presentPaymentSheet();
		const { paymentIntent } = await retrievePaymentIntent(clientSecret);
		// eslint-disable-next-line no-console
		console.log({ paymentIntent });
		if (error) {
			Alert.alert(`Error code: ${error.code}`, error.message);
		} else {
			Alert.alert('Success', 'Your order is confirmed!', [
				{
					text: 'OK',
					onPress: () => {
						navigation.navigate(
							'UserStack' as never,
							{ screen: 'UserAccount', params: { orderConfirmed: true } } as never,
						);
					},
				},
			]);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (orderId) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getOrderById(orderId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderId]);

	useEffect(() => {
		if (order) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			initializePaymentSheet(order._id as string);
		}
	}, [order]);

	if (loadingOrder) {
		return <Loading modalVisible={loadingOrder} />;
	}

	return (
		<ScrollView style={{ paddingTop: top, ...styles.container }}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Order: </Text>
				<Text style={styles.titleBold}> {orderId}</Text>
			</View>
			<PaymentStatus isPaid={order?.isPaid as boolean} />
			<ProductsOrder />
			<SummaryBill />
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.7}
				onPress={openPaymentSheet}
				// disabled={loading}
			>
				<Text style={styles.buttonText}>Pay now</Text>
				<Icon name={'cash-outline'} size={20} color={colors.white} />
			</TouchableOpacity>
		</ScrollView>
	);
};

export default Order;
