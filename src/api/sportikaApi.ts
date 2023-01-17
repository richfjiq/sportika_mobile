import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = Config.API_URL;

const sportikaApi = axios.create({ baseURL });

sportikaApi.interceptors.request.use(async (config) => {
	const token = await AsyncStorage.getItem('token');

	if (token && config.headers) {
		config.headers['x-token'] = token;
	}

	return config;
});

export default sportikaApi;
