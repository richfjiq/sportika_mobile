import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './actions';

type User = {
	email: string;
	name: string;
	role: string;
};

interface State {
	loading: boolean;
	error: boolean;
	errorMessage: string | undefined;
	token: string | null;
	user: User | null;
}

const initialState: State = {
	loading: false,
	error: false,
	errorMessage: undefined,
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

		builder.addMatcher(isAnyOf(loginUser.rejected, registerUser.rejected), (state, { error }) => {
			state.loading = false;
			state.error = true;
			state.errorMessage = error.message;
		});
	},
});

export default authStore.reducer;
