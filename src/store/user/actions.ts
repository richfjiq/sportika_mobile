import { createAsyncThunk } from '@reduxjs/toolkit';

import sportikaApi from '../../api/sportikaApi';

const GET_USER_ADDRESS = 'user/GET_USER_ADDRESS';

export interface IAddress {
	_id: string;
	user: string;
	firstName: string;
	lastName: string;
	address: string;
	zip: string;
	city: string;
	country: string;
	code: string;
	phone: string;
}

export const getUserAddress = createAsyncThunk(
	GET_USER_ADDRESS,
	async (id: string, { rejectWithValue }) => {
		const response = await sportikaApi.get<IAddress[]>(`/address/${id}`);

		if (response) {
			return response.data[0];
		} else {
			rejectWithValue('Server error.');
		}
	},
);
