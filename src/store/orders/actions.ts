import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import sportikaApi from '../../api/sportikaApi';
import { IOrder } from '../../interfaces';

const baseURL = Config.API_URL || '';

const GET_ORDER_BY_ID = 'orders/GET_ORDER_BY_ID';
// const GET_ORDERS_BY_USER = 'orders/GET_ORDERS_BY_USER';
const RESET_ORDER = 'orders/RESET_ORDER';

export const getOrderById = createAsyncThunk(
	GET_ORDER_BY_ID,
	async (orderId: string, { rejectWithValue }) => {
		try {
			const response = await sportikaApi.get<IOrder>(`${baseURL}/orders/${orderId}`);
			return response.data;
		} catch (error) {
			rejectWithValue('Server Error.');
		}
	},
);

export const resetOrder = createAction(RESET_ORDER, () => {
	return {
		payload: null,
	};
});
