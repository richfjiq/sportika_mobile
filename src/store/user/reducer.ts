import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getUserAddress, IAddress, resetAddress } from './actions';

interface State {
	loading: boolean;
	error: boolean;
	errorMessage: string | null;
	shippingAddress: {
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
	} | null;
}

const initialState: State = {
	loading: false,
	error: false,
	errorMessage: null,
	shippingAddress: null,
};

const userStore = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserAddress.pending, (state) => {
			state.loading = true;
		});

		builder.addCase(getUserAddress.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.shippingAddress = payload as IAddress;
		});

		builder.addCase(resetAddress, (state) => {
			state.loading = false;
			state.error = false;
			state.errorMessage = null;
			state.shippingAddress = null;
		});

		builder.addMatcher(isAnyOf(getUserAddress.rejected), (state, action) => {
			state.loading = false;
			state.error = true;
			state.errorMessage = action.payload as string;
		});
	},
});

export default userStore.reducer;
