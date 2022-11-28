import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import sportikaApi from '../../api/sportikaApi';

const CREATE_USER_ADDRESS = 'user/CREATE_USER_ADDRESS';
const UPDATE_USER_ADDRESS = 'user/UPDATE_USER_ADDRESS';
const GET_USER_ADDRESS = 'user/GET_USER_ADDRESS';
const RESET_ADDRESS = 'user/RESET_ADDRESS';

export interface IAddressPost {
	user: string;
	firstName: string;
	lastName: string;
	address: string;
	zip: string;
	city: string;
	state: string;
	country: string;
	code: string;
	phone: string;
}
export interface IAddress extends IAddressPost {
	_id: string;
}

export const createUserAddress = createAsyncThunk(
	CREATE_USER_ADDRESS,
	async (address: IAddressPost, { rejectWithValue }) => {
		const response = await sportikaApi.post<IAddressPost>('/address', address);
		if (response.data) return response.data;
		rejectWithValue('Server error.');
	},
);

export const updateUserAddress = createAsyncThunk(
	UPDATE_USER_ADDRESS,
	async (address: IAddressPost, { rejectWithValue }) => {
		const response = await sportikaApi.put<IAddressPost>('/address', address);
		if (response.data) return response.data;
		rejectWithValue('Server error.');
	},
);

export const getUserAddress = createAsyncThunk(
	GET_USER_ADDRESS,
	async (id: string, { rejectWithValue }) => {
		const response = await sportikaApi.get<IAddress[]>(`/address/${id}`);

		if (response.data.length > 0) return response.data[0];
		if (response.data.length === 0) return null;
		rejectWithValue('Server error.');
	},
);

export const resetAddress = createAction(RESET_ADDRESS);
