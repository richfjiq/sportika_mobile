import { createAsyncThunk } from '@reduxjs/toolkit';

import sportikaApi from '../../api/sportikaApi';
import { IProduct } from '../../interfaces';

const GET_ALL_PRODUCTS = 'products/GET_ALL_PRODUCTS';

export const getAllProducts = createAsyncThunk(GET_ALL_PRODUCTS, async (_, { rejectWithValue }) => {
	try {
		const response = await sportikaApi.get<IProduct[]>('/products');
		return response.data;
	} catch (error) {
		rejectWithValue('Server Error.');
	}
});
