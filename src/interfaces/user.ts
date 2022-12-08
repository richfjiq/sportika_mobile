export interface IUser {
	_id: string;
	name: string;
	email: string;
	password?: string;
	role: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface IUserUpdate {
	name: string;
	email: string;
	newPassword: string;
	newPassword2: string;
}
