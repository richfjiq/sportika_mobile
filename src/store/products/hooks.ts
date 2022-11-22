import { shallowEqual } from 'react-redux';

import { RootState } from '../index';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	getAllProducts as getAllProductsAction,
	getProductBySlug as getProductBySlugAction,
} from './actions';
import { useCallback } from 'react';

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
