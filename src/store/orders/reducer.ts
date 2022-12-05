import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { IAllOrders, IOrder } from '../../interfaces';
import { getOrderById, resetOrder } from './actions';

interface OrderState {
	loading: boolean;
	error: boolean;
	errorMessage: string | null;
	order: IOrder | null;
	allOrders: IAllOrders[] | null;
}

const initialState: OrderState = {
	loading: false,
	error: false,
	errorMessage: null,
	order: null,
	allOrders: null,
};

const ordersStore = createSlice({
	name: 'orders',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(resetOrder, (state, { payload }) => {
			state.order = payload;
		});
		builder.addCase(getOrderById.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getOrderById.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.order = payload as IOrder;
		});
		builder.addMatcher(isAnyOf(getOrderById.rejected), (state, { payload }) => {
			state.loading = false;
			state.error = true;
			state.errorMessage = payload as string;
		});
	},
});

export default ordersStore.reducer;
