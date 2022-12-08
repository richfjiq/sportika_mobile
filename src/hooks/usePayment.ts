import { Alert } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import {
	initPaymentSheet,
	presentPaymentSheet,
	retrievePaymentIntent,
} from '@stripe/stripe-react-native';

import { useAuth, useCart, useOrders } from '../store';
import { fetchPaymentSheetParams } from '../utils';
import { useNavigation } from '@react-navigation/native';

interface Params {
	customer: string;
	ephemeralKey: string;
	paymentIntent: string;
}

const usePayment = () => {
	const [loading, setLoading] = useState(false);
	const [clientSecret, setClientSecret] = useState('');
	const [loadingPS, setLoadingPS] = useState(false);
	const { orderId, setOrderConfirmed } = useCart();
	const { order, confirmPayment, getOrdersByUser } = useOrders();
	const { user } = useAuth();
	const navigation = useNavigation();

	const initializePaymentSheet = async (id: string) => {
		try {
			setLoadingPS(true);
			setLoading(true);
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

			setLoadingPS(false);

			if (!error) {
				setLoading(true);
			}
		} catch (error) {
			setLoadingPS(false);
			setLoading(false);
			Alert.alert('Error', 'Server Error.');
		}
	};

	const openPaymentSheet = async () => {
		if (!clientSecret) return;
		const { error } = await presentPaymentSheet();
		const { paymentIntent } = await retrievePaymentIntent(clientSecret);

		if (error) {
			Alert.alert(`${error.code}`, error.message);
		} else {
			setOrderConfirmed(true);
			await confirmPayment({
				orderId: orderId as string,
				isPaid: true,
				paidAt: paymentIntent?.created as string,
				paymentId: paymentIntent?.id as string,
			});
			await getOrdersByUser(user?._id as string);
			Alert.alert('Success', 'Your order is paid!', [
				{
					text: 'OK',
					onPress: () => {
						navigation.navigate('UserStack' as never, { screen: 'UserAccount' } as never);
					},
				},
			]);
			setLoading(false);
		}
	};

	const initPS = useCallback(async () => {
		if (order && order?.isPaid === false) {
			await initializePaymentSheet(order._id as string);
		}
	}, [order]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		initPS();
	}, [initPS]);

	return {
		loadingPS,
		loading,
		openPaymentSheet,
	};
};

export default usePayment;
