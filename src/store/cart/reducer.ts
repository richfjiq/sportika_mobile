import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { ICartProduct } from '../../interfaces';
import { ShippingAddress } from '../../interfaces/address';
import { resetOrderId, setOrderConfirmed } from './actions';
import {
	addAddress,
	addCartFromCookies,
	addOrderSummary,
	addProductToCart,
	createOrder,
	removeProductFromCart,
	setOrderId,
	updateCartQuantity,
} from './actions';

export interface CartState {
	loading: boolean;
	error: boolean;
	errorMessage: string | null;
	orderConfirmed: boolean;
	orderId: string | null;
	isCartLoaded: boolean;
	cart: ICartProduct[];
	numberOfItems: number;
	subTotal: number;
	tax: number;
	total: number;
	shippingAddress: ShippingAddress | null;
}

const initialState: CartState = {
	loading: false,
	error: false,
	errorMessage: null,
	orderConfirmed: false,
	orderId: null,
	isCartLoaded: false,
	cart: [],
	numberOfItems: 0,
	subTotal: 0,
	tax: 0,
	total: 0,
	shippingAddress: null,
};

const cartStore = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addProductToCart, (state, action) => {
			const productIndexMatched = state.cart.findIndex(
				(product) =>
					product && product.slug === action.payload.slug && product.size === action.payload.size,
			);

			if (productIndexMatched === -1) {
				state.cart = [...state.cart, action.payload];
			} else {
				state.cart[productIndexMatched].quantity += action.payload.quantity;
				state.cart = [...state.cart];
			}
		});
		builder.addCase(updateCartQuantity, (state, action) => {
			const cart = state.cart.map((product) => {
				if (product._id !== action.payload.product._id) return product;
				if (product.size !== action.payload.product.size) return product;

				product.quantity = action.payload.newQuantity;
				return product;
			});

			state.cart = cart;
		});
		builder.addCase(removeProductFromCart, (state, action) => {
			const newState = state.cart.filter((product) => {
				if (product._id === action.payload._id && product.size === action.payload.size) return;

				return product;
			});

			state.cart = newState;
		});
		builder.addCase(addOrderSummary, (state, action) => {
			state.numberOfItems = action.payload.numberOfItems;
			state.subTotal = action.payload.subTotal;
			state.tax = action.payload.tax;
			state.total = action.payload.total;
		});
		builder.addCase(addCartFromCookies, (state, action) => {
			state.cart = action.payload;
			state.isCartLoaded = true;
		});
		builder.addCase(addAddress, (state, action) => {
			state.shippingAddress = action.payload;
		});
		builder.addCase(setOrderId, (state, action) => {
			state.orderId = action.payload;
		});
		builder.addCase(resetOrderId, (state, { payload }) => {
			state.orderId = payload;
			state.numberOfItems = 0;
			state.subTotal = 0;
			state.tax = 0;
			state.total = 0;
			state.cart = [];
			state.shippingAddress = null;
		});
		builder.addCase(setOrderConfirmed, (state, { payload }) => {
			state.orderConfirmed = payload;
		});
		builder.addCase(createOrder.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(createOrder.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.orderId = payload as string;
		});
		builder.addMatcher(isAnyOf(createOrder.rejected), (state, { payload }) => {
			state.loading = false;
			state.error = true;
			state.errorMessage = payload as string;
		});
	},
});

export default cartStore.reducer;
