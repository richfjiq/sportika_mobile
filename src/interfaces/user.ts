export interface IUser {
	_id: string;
	name: string;
	email: string;
	password?: string;
	role: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface IUserDataUpdate {
	userId?: string;
	name: string;
	email: string;
	currentPassword: string;
}

export interface IUserPasswordUpdate {
	userId?: string;
	currentPassword: string;
	newPassword: string;
	repeatPassword: string;
}
