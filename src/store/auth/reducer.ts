import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
	registerUser,
	removeError,
	checkToken,
	logout,
	loginUser,
	updateUserData,
	googleAuthentication,
	updateUserPassword,
} from './actions';

type User = {
	_id: string;
	email: string;
	name: string;
	role: string;
	type?: string;
};

interface State {
	loading: boolean;
	error: boolean;
	errorMessage: string | null;
	token: string | null;
	user: User | null;
}

const initialState: State = {
	loading: false,
	error: false,
	errorMessage: null,
	token: null,
	user: null,
};

const authStore = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.token = payload.token;
			state.user = payload.user;
		});
		builder.addCase(googleAuthentication.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(googleAuthentication.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.token = payload.token;
			state.user = payload.user;
		});
		builder.addCase(registerUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(registerUser.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.token = payload.token;
			state.user = payload.user;
		});
		builder.addCase(checkToken.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(checkToken.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.token = payload.token;
			state.user = payload.user;
		});
		builder.addCase(removeError, (state) => {
			state.errorMessage = null;
			state.error = false;
		});
		builder.addCase(logout.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(logout.fulfilled, (state) => {
			state.loading = false;
			state.token = null;
			state.user = null;
			state.error = false;
			state.errorMessage = null;
		});
		builder.addCase(updateUserData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.user = payload?.user ?? null;
		});
		builder.addCase(updateUserPassword.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(updateUserPassword.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.user = payload?.user ?? null;
		});
		builder.addMatcher(
			isAnyOf(updateUserData.rejected, updateUserPassword.rejected),
			(state, action) => {
				state.loading = false;
				state.error = true;
				state.errorMessage = action.payload as string;
			},
		);
		builder.addMatcher(
			isAnyOf(
				loginUser.rejected,
				registerUser.rejected,
				checkToken.rejected,
				googleAuthentication.rejected,
			),
			(state, action) => {
				state.loading = false;
				state.error = true;
				state.errorMessage = action.payload as string;
				state.token = null;
			},
		);
	},
});

export default authStore.reducer;
