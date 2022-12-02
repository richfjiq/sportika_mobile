import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

import { IProduct } from '../../interfaces';

const baseURL = Config.API_URL || '';

const GET_ALL_PRODUCTS = 'products/GET_ALL_PRODUCTS';
const GET_PRODUCT_BY_SLUG = 'products/GET_PRODUCT_BY_SLUG';
const SET_ALL_PRODUCTS = 'products/SET_ALL_PRODUCTS';

export const getAllProducts = createAsyncThunk(GET_ALL_PRODUCTS, async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get<IProduct[]>(`${baseURL}/products`);
		return response.data;
	} catch (error) {
		rejectWithValue('Server Error.');
	}
});

export const getProductBySlug = createAsyncThunk(
	GET_PRODUCT_BY_SLUG,
	async (slug: string, { rejectWithValue }) => {
		try {
			const response = await axios.get<IProduct>(`${baseURL}/products/${slug}`);
			if (response.data) {
				return response.data;
			}
			return null;
		} catch (error) {
			rejectWithValue('Server Error.');
		}
	},
);

export const setAllProducts = createAction(SET_ALL_PRODUCTS, (products: IProduct[]) => {
	return {
		payload: products,
	};
});
