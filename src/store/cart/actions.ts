import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ICartProduct, IOrder, ShippingAddress } from '../../interfaces';
import { store } from '../';
import sportikaApi from '../../api/sportikaApi';
import { TAX_RATE } from '../../utils';

const ADD_PRODUCT_TO_CART = 'cart/ADD_PRODUCT_TO_CART';
const UPDATE_CART_QUANTITY = 'cart/UPDATE_CART_QUANTITY';
const REMOVE_PRODUCT_FROM_CART = 'cart/REMOVE_PRODUCT_FROM_CART';
const ADD_ORDER_SUMMARY = 'cart/ADD_ORDER_SUMMARY';
const UPDATE_CART_IN_COOKIES = 'cart/UPDATE_CART_IN_COOKIES';
const ADD_CART_FROM_COOKIES = 'cart/ADD_CART_FROM_COOKIES';
const ADD_ADDRESS = 'cart/ADD_ADDRESS';
const CREATE_ORDER = 'cart/CREATE_ORDER';
const SET_ORDER_ID = 'cart/SET_ORDER_ID';
const RESET_ORDER_ID = 'cart/RESET_ORDER_ID';
const SET_ORDER_CONFIRMED = 'cart/SET_ORDER_CONFIRMED';

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
	const { cart, user } = store.getState();

	const shippingAddress = {
		firstName: user.shippingAddress?.firstName as string,
		lastName: user.shippingAddress?.lastName as string,
		address: user.shippingAddress?.address as string,
		zip: user.shippingAddress?.zip as string,
		city: user.shippingAddress?.city as string,
		state: user.shippingAddress?.state as string,
		country: user.shippingAddress?.country as string,
		code: user.shippingAddress?.code as string,
		phone: user.shippingAddress?.phone as string,
	};

	const body = {
		orderItems: cart.cart,
		shippingAddress,
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

export const setOrderId = createAction(SET_ORDER_ID, (orderId: string) => {
	return {
		payload: orderId,
	};
});

export const resetOrderId = createAction(RESET_ORDER_ID, () => {
	return {
		payload: null,
	};
});

export const setOrderConfirmed = createAction(SET_ORDER_CONFIRMED, (value: boolean) => {
	return {
		payload: value,
	};
});
