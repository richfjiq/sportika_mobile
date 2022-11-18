import { shallowEqual } from 'react-redux';

import { RootState } from '../index';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useCallback } from 'react';
import { getUserAddress as getUserAddressAction } from './actions';

export const useUser = () => {
	const userState = useAppSelector((state: RootState) => state.user, shallowEqual);
	const dispatch = useAppDispatch();

	const getUserAddress = useCallback(
		async (id: string) => {
			await dispatch(getUserAddressAction(id));
		},
		[dispatch],
	);

	return {
		...userState,
		getUserAddress,
	};
};
