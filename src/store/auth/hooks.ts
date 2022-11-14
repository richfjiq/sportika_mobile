import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';

import { loginUser } from './actions';
import { RootState } from '../index';
import { useAppDispatch, useAppSelector } from '../hooks';

export const useAuth = () => {
	const authState = useAppSelector((state: RootState) => state.auth, shallowEqual);
	const dispatch = useAppDispatch();

	const login = useCallback(
		async (email: string, password: string) => {
			await dispatch(loginUser({ email, password }));
		},
		[dispatch],
	);

	return {
		...authState,
		login,
	};
};
