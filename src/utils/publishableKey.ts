import axios from 'axios';
import Config from 'react-native-config';

const baseURL = Config.API_URL || '';

interface Data {
	publishableKey: string;
	clientSecret: string;
}

export const getPublishableKey = async () => {
	const response = await axios.get<Data>(`${baseURL}/payment/config`);
	return response.data.publishableKey;
};
