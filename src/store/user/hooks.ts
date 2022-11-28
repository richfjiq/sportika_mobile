import { shallowEqual } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
	getUserAddress as getUserAddressAction,
	createUserAddress as createUserAddressAction,
	updateUserAddress as updateUserAddressAction,
	IAddressPost,
} from './actions';

export const useUser = () => {
	const userState = useAppSelector((state: RootState) => state.user, shallowEqual);
	const dispatch = useAppDispatch();

	const getUserAddress = useCallback(
		async (id: string) => {
			await dispatch(getUserAddressAction(id));
		},
		[dispatch],
	);

	const createUserAddress = useCallback(
		async (address: IAddressPost) => {
			await dispatch(createUserAddressAction(address));
		},
		[dispatch],
	);

	const updateUserAddress = useCallback(
		async (address: IAddressPost) => {
			await dispatch(updateUserAddressAction(address));
		},
		[dispatch],
	);

	return {
		...userState,
		getUserAddress,
		createUserAddress,
		updateUserAddress,
	};
};
