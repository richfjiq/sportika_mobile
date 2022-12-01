import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import { getOrderById as getOrderByIdAction } from './actions';

export const useOrders = () => {
	const ordersState = useAppSelector((state: RootState) => state.orders, shallowEqual);
	const dispatch = useAppDispatch();

	const getOrderById = useCallback(
		async (orderId: string) => {
			await dispatch(getOrderByIdAction(orderId));
		},
		[dispatch],
	);

	return {
		...ordersState,
		getOrderById,
	};
};