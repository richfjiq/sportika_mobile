import { shallowEqual } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	getAllProducts as getAllProductsAction,
	getProductBySlug as getProductBySlugAction,
	setAllProducts as setAllProductsAction,
} from './actions';
import { IProduct } from '../../interfaces';

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

	const setAllProducts = useCallback(
		(products: IProduct[]) => {
			dispatch(setAllProductsAction(products));
		},
		[dispatch],
	);

	return {
		...productsState,
		getAllProducts,
		getProductBySlug,
		setAllProducts,
	};
};
