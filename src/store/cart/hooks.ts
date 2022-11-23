import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import { ICartProduct, ShippingAddress } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import {
	addProductToCart as addProductToCartAction,
	updateCartQuantity as updateCartQuantityAction,
	removeProductFromCart as removeProductFromCartAction,
	addOrderSummary as addOrderSummaryAction,
	updateCartInCookies as updateCartInCookiesAction,
	addCartFromCookies as addCartFromCookiesAction,
	addAddress as addAddressAction,
	createOrder as createOrderAction,
} from './actions';

export const useCart = () => {
	const cartState = useAppSelector((state: RootState) => state.cart, shallowEqual);
	const dispatch = useAppDispatch();

	const addProductToCart = useCallback(
		async (product: ICartProduct) => {
			dispatch(addProductToCartAction(product));
			dispatch(addOrderSummaryAction());
			await dispatch(updateCartInCookiesAction());
		},
		[dispatch],
	);

	const updateCartQuantity = useCallback(
		async (product: ICartProduct, newQuantity: number) => {
			dispatch(updateCartQuantityAction(product, newQuantity));
			dispatch(addOrderSummaryAction());
			await dispatch(updateCartInCookiesAction());
		},
		[dispatch],
	);

	const removeProductFromCart = useCallback(
		async (product: ICartProduct) => {
			dispatch(removeProductFromCartAction(product));
			dispatch(addOrderSummaryAction());
			await dispatch(updateCartInCookiesAction());
		},
		[dispatch],
	);

	const addCartFromCookies = useCallback(
		(cart: ICartProduct[]) => {
			dispatch(addCartFromCookiesAction(cart));
			dispatch(addOrderSummaryAction());
		},
		[dispatch],
	);

	const addAddress = useCallback(
		(address: ShippingAddress) => {
			dispatch(addAddressAction(address));
		},
		[dispatch],
	);

	const createOrder = useCallback(async () => {
		await dispatch(createOrderAction());
	}, [dispatch]);

	return {
		...cartState,
		addProductToCart,
		removeProductFromCart,
		updateCartQuantity,
		addCartFromCookies,
		addAddress,
		createOrder,
	};
};
