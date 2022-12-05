import Config from 'react-native-config';

import sportikaApi from '../api/sportikaApi';

const baseURL = Config.API_URL || '';

export interface Params {
	customer: string;
	ephemeralKey: string;
	paymentIntent: string;
}

export const fetchPaymentSheetParams = async (orderId: string) => {
	try {
		const response = await sportikaApi.post<Params>(`${baseURL}/payment/payment-sheet/${orderId}`);
		const { data } = response;
		return data;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
};
