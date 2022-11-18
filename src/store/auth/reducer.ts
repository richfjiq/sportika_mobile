import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, registerUser, removeError, checkToken, logout } from './actions';

type User = {
	_id: string;
	email: string;
	name: string;
	role: string;
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

		builder.addCase(logout, (state) => {
			state.token = null;
			state.user = null;
		});

		builder.addMatcher(
			isAnyOf(loginUser.rejected, registerUser.rejected, checkToken.rejected),
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
