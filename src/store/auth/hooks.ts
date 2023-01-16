import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';

import {
	loginUser as loginUserAction,
	registerUser as registerUserAction,
	removeError as removeErrorAction,
	checkToken as checkTokenAction,
	logout as logoutAction,
	updateUserData as updateUserDataAction,
	updateUserPassword as updateUserPasswordAction,
	googleAuthentication as googleAuthenticationAction,
} from './actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { resetAddress } from '../user';
import { RootState } from '../store';
import { IUserDataUpdate, IUserPasswordUpdate } from '../../interfaces';

export const useAuth = () => {
	const authState = useAppSelector((state: RootState) => state.auth, shallowEqual);
	const dispatch = useAppDispatch();

	const loginUser = useCallback(
		async (email: string, password: string): Promise<void> => {
			await dispatch(loginUserAction({ email, password }));
		},
		[dispatch],
	);

	const registerUser = useCallback(
		async (email: string, password: string, name: string): Promise<void> => {
			await dispatch(registerUserAction({ email, password, name }));
		},
		[dispatch],
	);

	const checkToken = useCallback(async (): Promise<void> => {
		await dispatch(checkTokenAction());
	}, [dispatch]);

	const logout = useCallback(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		dispatch(logoutAction());
		dispatch(resetAddress());
	}, [dispatch]);

	const removeError = useCallback(() => {
		dispatch(removeErrorAction());
	}, [dispatch]);

	const updateUserData = useCallback(
		async ({ userId, name, email, currentPassword }: IUserDataUpdate) => {
			await dispatch(updateUserDataAction({ userId, name, email, currentPassword }));
		},
		[dispatch],
	);

	const updateUserPassword = useCallback(
		async ({ userId, currentPassword, newPassword }: IUserPasswordUpdate) => {
			await dispatch(
				updateUserPasswordAction({ userId, currentPassword, newPassword } as IUserPasswordUpdate),
			);
		},
		[dispatch],
	);

	const googleAuthentication = useCallback(
		async (token: string) => {
			await dispatch(googleAuthenticationAction(token));
		},
		[dispatch],
	);

	return {
		...authState,
		loginUser,
		registerUser,
		removeError,
		checkToken,
		logout,
		updateUserData,
		updateUserPassword,
		googleAuthentication,
	};
};
