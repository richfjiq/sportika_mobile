import { createAsyncThunk } from '@reduxjs/toolkit';

import sportikaApi from '../../api/sportikaApi';
import { IProduct } from '../../interfaces';

const GET_ALL_PRODUCTS = 'products/GET_ALL_PRODUCTS';
const GET_PRODUCT_BY_SLUG = 'products/GET_PRODUCT_BY_SLUG';

export const getAllProducts = createAsyncThunk(GET_ALL_PRODUCTS, async (_, { rejectWithValue }) => {
	try {
		const response = await sportikaApi.get<IProduct[]>('/products');
		return response.data;
	} catch (error) {
		rejectWithValue('Server Error.');
	}
});

export const getProductBySlug = createAsyncThunk(
	GET_PRODUCT_BY_SLUG,
	async (slug: string, { rejectWithValue }) => {
		try {
			const response = await sportikaApi.get<IProduct>(`/products/${slug}`);
			if (response.data) {
				return response.data;
			}
			return null;
		} catch (error) {
			rejectWithValue('Server Error.');
		}
	},
);
