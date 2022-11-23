import { shallowEqual } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	getAllProducts as getAllProductsAction,
	getProductBySlug as getProductBySlugAction,
} from './actions';

export const useProducts = () => {
	const productsState = useAppSelector((state: RootState) => state.products, shallowEqual);
	const dispatch = useAppDispatch();

	const getAllProducts = useCallback(async () => {
		await dispatch(getAllProductsAction());
	}, [dispatch]);

	const getProductBySlug = useCallback(
		async (slug: string) => {
			await dispatch(getProductBySlugAction(slug));
		},
		[dispatch],
	);

	return {
		...productsState,
		getAllProducts,
		getProductBySlug,
	};
};
