import { createAsyncThunk } from '@reduxjs/toolkit';
import sportikaApi from '../../api/sportikaApi';

const AUTH_LOGIN = 'auth/AUTH_LOGIN';
const AUTH_REGISTER = 'auth/AUTH_REGISTER';

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
		email: string;
		name: string;
		role: string;
	};
};

export const loginUser = createAsyncThunk(
	AUTH_LOGIN,
	async ({ email, password }: LoginArguments, { rejectWithValue }) => {
		try {
			console.log(email, password);
			const response = await sportikaApi.post<LoginData>('/user/login', { email, password });
			console.log({ response });
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const registerUser = createAsyncThunk(
	AUTH_REGISTER,
	async ({ email, password, name }: RegisterArguments): Promise<LoginData> => {
		const response = await sportikaApi.post<LoginData>('user/register', { email, password, name });
		return response.data;
	},
);
