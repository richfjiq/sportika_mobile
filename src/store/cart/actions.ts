import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ICartProduct, IOrder, ShippingAddress } from '../../interfaces';
import { store } from '../';
import sportikaApi from '../../api/sportikaApi';
import { TAX_RATE } from '../../utils';

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
const ADD_ORDER_SUMMARY = 'ADD_ORDER_SUMMARY';
const UPDATE_CART_IN_COOKIES = 'UPDATE_CART_IN_COOKIES';
const ADD_CART_FROM_COOKIES = 'ADD_CART_FROM_COOKIES';
// const LOAD_ADDRESS_FROM_COOKIES = 'LOAD_ADDRESS_FROM_COOKIES';
const ADD_ADDRESS = 'ADD_ADDRESS';
const CREATE_ORDER = 'CREATE_ORDER';
// const SET_ORDER_CREATED = 'SET_ORDER_CREATED';
// const NEW_ORDER_CREATED = 'NEW_ORDER_CREATED';

export const addProductToCart = createAction(ADD_PRODUCT_TO_CART, (product: ICartProduct) => {
	return {
		payload: product,
	};
});

export const updateCartQuantity = createAction(
	UPDATE_CART_QUANTITY,
	(product: ICartProduct, newQuantity: number) => {
		return {
			payload: {
				product,
				newQuantity,
			},
		};
	},
);

export const removeProductFromCart = createAction(
	REMOVE_PRODUCT_FROM_CART,
	(product: ICartProduct) => {
		return {
			payload: product,
		};
	},
);

export const addOrderSummary = createAction(ADD_ORDER_SUMMARY, () => {
	const { cart } = store.getState();
	const numberOfItems = cart.cart.reduce((prev, current) => current.quantity + prev, 0);
	const subTotal = cart.cart.reduce((prev, current) => current.price * current.quantity + prev, 0);
	const taxRate = TAX_RATE;

	const orderSummary = {
		numberOfItems,
		subTotal,
		tax: subTotal * taxRate,
		total: subTotal * (taxRate + 1),
	};

	return {
		payload: orderSummary,
	};
});

export const updateCartInCookies = createAsyncThunk(UPDATE_CART_IN_COOKIES, async () => {
	const { cart } = store.getState();
	await AsyncStorage.setItem('cart', JSON.stringify(cart.cart));
});

export const addCartFromCookies = createAction(ADD_CART_FROM_COOKIES, (cart: ICartProduct[]) => {
	return {
		payload: cart,
	};
});

export const addAddress = createAction(ADD_ADDRESS, (address: ShippingAddress) => {
	return {
		payload: address,
	};
});

export const createOrder = createAsyncThunk(CREATE_ORDER, async (_, { rejectWithValue }) => {
	const { cart } = store.getState();

	const body = {
		orderItems: cart.cart,
		shippingAddress: cart.shippingAddress,
		numberOfItems: cart.numberOfItems,
		subTotal: cart.subTotal,
		tax: cart.tax,
		total: cart.total,
		isPaid: false,
	};

	try {
		const { data } = await sportikaApi.post<IOrder>('/orders', body);
		return data._id || '';
	} catch (error) {
		rejectWithValue('Server Error.');
	}
});
