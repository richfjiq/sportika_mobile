import * as yup from 'yup';

export const loginValidation = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});

export const registerValidation = yup.object().shape({
	email: yup.string().email().required(),
	name: yup.string().min(2).required(),
	password: yup.string().min(6).required(),
	passwordRepeat: yup
		.string()
		.required('please retype your password')
		.oneOf([yup.ref('password'), null], 'passwords must match'),
});

export const addressValidation = yup.object().shape({
	firstName: yup.string().min(2).required(),
	lastName: yup.string().min(2).required(),
	address: yup.string().min(10).required(),
	zip: yup.string().min(5).required(),
	city: yup.string().min(4).required(),
	state: yup.string().required(),
	country: yup.string().required(),
	code: yup.string().min(1).required(),
	phone: yup.string().min(10).required(),
});

export const userDataValidation = yup.object().shape({
	name: yup.string().min(2).required(),
	email: yup.string().email().required(),
	currentPassword: yup.string().min(6, 'Must be at least 6 characters').required(),
});

export const userPasswordValidation = yup.object().shape({
	currentPassword: yup.string().min(6, 'Must be at least 6 characters').required(),
	newPassword: yup.string().min(6, 'Must be at least 6 characters').required(),
	repeatPassword: yup
		.string()
		.required('please retype your new password')
		.oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});
