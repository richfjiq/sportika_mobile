import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import sportikaApi from '../../api/sportikaApi';

const AUTH_LOGIN = 'auth/AUTH_LOGIN';
const AUTH_REGISTER = 'auth/AUTH_REGISTER';
const CHECK_TOKEN = 'auth/CHECK_TOKEN';
const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
const REMOVE_ERROR = 'auth/REMOVE_ERROR';

export type LoginArguments = {
	email: string;
	password: string;
};

export type RegisterArguments = {
	email: string;
	password: string;
	name: string;
};

type LoginData = {
	token: string;
	user: {
		_id: string;
		email: string;
		name: string;
		role: string;
	};
};

type ErrorRequest = {
	message: string;
};

export const loginUser = createAsyncThunk(
	AUTH_LOGIN,
	async ({ email, password }: LoginArguments, { rejectWithValue }) => {
		try {
			const response = await sportikaApi.post<LoginData>('/user/login', { email, password });
			await AsyncStorage.setItem('token', response.data.token);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const err = error.response?.data as ErrorRequest;
				return rejectWithValue(err.message);
			}

			return rejectWithValue(error);
		}
	},
);

export const registerUser = createAsyncThunk(
	AUTH_REGISTER,
	async ({ email, password, name }: RegisterArguments, { rejectWithValue }) => {
		try {
			const response = await sportikaApi.post<LoginData>('user/register', {
				email,
				password,
				name,
			});
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const err = error.response?.data as ErrorRequest;
				return rejectWithValue(err.message);
			}

			return rejectWithValue(error);
		}
	},
);

export const checkToken = createAsyncThunk(
	CHECK_TOKEN,
	async (_, { rejectWithValue, dispatch }) => {
		const token = await AsyncStorage.getItem('token');

		if (!token) {
			dispatch(logout());
		}

		try {
			const response = await sportikaApi.get<LoginData>('user/validate-token');
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const err = error.response?.data as ErrorRequest;
				return rejectWithValue(err.message);
			}

			return rejectWithValue(error);
		}
	},
);

export const logout = createAction(AUTH_LOGOUT);

export const removeError = createAction(REMOVE_ERROR);
