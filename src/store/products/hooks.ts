import { shallowEqual } from 'react-redux';

import { RootState } from '../index';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllProducts as getAllProductsAction } from './actions';
import { useCallback } from 'react';

export const useProducts = () => {
	const productsState = useAppSelector((state: RootState) => state.products, shallowEqual);
	const dispatch = useAppDispatch();

	const getAllProducts = useCallback(async () => {
		await dispatch(getAllProductsAction());
	}, [dispatch]);

	return {
		...productsState,
		getAllProducts,
	};
};
