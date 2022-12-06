import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { IAllOrders, IOrder } from '../../interfaces';
import { confirmPayment, getOrderById, getOrdersByUser, resetOrder } from './actions';

interface OrderState {
	loading: boolean;
	error: boolean;
	errorMessage: string | null;
	order: IOrder | null;
	allOrders: IAllOrders[];
}

const initialState: OrderState = {
	loading: false,
	error: false,
	errorMessage: null,
	order: null,
	allOrders: [],
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
		builder.addCase(confirmPayment.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(confirmPayment.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.order = payload as IOrder;
		});
		builder.addCase(getOrdersByUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getOrdersByUser.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.allOrders = payload as IOrder[];
		});
		builder.addMatcher(
			isAnyOf(getOrderById.rejected, confirmPayment.rejected, getOrdersByUser.rejected),
			(state, { payload }) => {
				state.loading = false;
				state.error = true;
				state.errorMessage = payload as string;
			},
		);
	},
});

export default ordersStore.reducer;
