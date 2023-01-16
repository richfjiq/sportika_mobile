import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import sportikaApi from '../../api/sportikaApi';
import { IUserDataUpdate, IUserPasswordUpdate } from '../../interfaces';

const AUTH_LOGIN = 'auth/AUTH_LOGIN';
const AUTH_REGISTER = 'auth/AUTH_REGISTER';
const CHECK_TOKEN = 'auth/CHECK_TOKEN';
const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
const REMOVE_ERROR = 'auth/REMOVE_ERROR';
const UPDATE_USER_DATA = 'auth/UPDATE_USER_DATA';
const UPDATE_USER_PASSWORD = 'auth/UPDATE_USER_PASSWORD';
const GOOGLE_AUTHENTICATION = 'GOOGLE_AUTHENTICATION';

export type LoginArguments = {
	email: string;
	password: string;
};

export type RegisterArguments = {
	email: string;
	password: string;
	name: string;
};

export type LoginData = {
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

export const updateUserData = createAsyncThunk(
	UPDATE_USER_DATA,
	async ({ userId, name, email, currentPassword }: IUserDataUpdate, { rejectWithValue }) => {
		try {
			const response = await sportikaApi.put(`user/account/${userId as string}`, {
				name,
				email,
				currentPassword,
			});
			return response.data as LoginData;
		} catch (error) {
			if (error instanceof AxiosError) {
				const err = error.response?.data as ErrorRequest;
				return rejectWithValue(err.message);
			}
		}
	},
);

export const updateUserPassword = createAsyncThunk(
	UPDATE_USER_PASSWORD,
	async ({ userId, currentPassword, newPassword }: IUserPasswordUpdate, { rejectWithValue }) => {
		try {
			const response = await sportikaApi.put(`user/password/${userId as string}`, {
				currentPassword,
				newPassword,
			});
			return response.data as LoginData;
		} catch (error) {
			if (error instanceof AxiosError) {
				const err = error.response?.data as ErrorRequest;
				return rejectWithValue(err.message);
			}
		}
	},
);

export const checkToken = createAsyncThunk(
	CHECK_TOKEN,
	async (_, { rejectWithValue, dispatch }) => {
		const token = await AsyncStorage.getItem('token');

		if (!token) {
			await dispatch(logout());
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

export const logout = createAsyncThunk(AUTH_LOGOUT, async (_, { rejectWithValue }) => {
	try {
		await AsyncStorage.removeItem('token');
	} catch (error) {
		rejectWithValue('Server Error.');
	}
});

export const googleAuthentication = createAsyncThunk(
	GOOGLE_AUTHENTICATION,
	async (token: string, { rejectWithValue }) => {
		try {
			const { data } = await sportikaApi.post<LoginData>(`user/google-auth/${token}`);
			await AsyncStorage.setItem('token', data.token);
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const err = error.response?.data as ErrorRequest;
				return rejectWithValue(err.message);
			}

			return rejectWithValue(error);
		}
	},
);

export const removeError = createAction(REMOVE_ERROR);
