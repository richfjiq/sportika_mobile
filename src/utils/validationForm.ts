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
	firstName: yup.string().min(2, 'At least 2 characters').required(),
	lastName: yup.string().min(2, 'At least 2 characters').required(),
	address: yup.string().min(10, 'At least 10 characters').required(),
	zip: yup.string().min(5, '5 characters required').required(),
	city: yup.string().min(4, 'At least 4 characters').required(),
	state: yup.string().required('Required field'),
	country: yup.string().required('Select 1 option'),
	code: yup.string().min(1, 'Select 1 option').required(),
	phone: yup.string().min(10, 'At least 10 characters').required(),
});

export const userDataValidation = yup.object().shape({
	name: yup.string().min(2).required(),
	email: yup.string().email().required(),
	currentPassword: yup.string().min(6, 'At least 6 characters').required(),
});

export const userPasswordValidation = yup.object().shape({
	currentPassword: yup.string().min(6, 'At least 6 characters').required(),
	newPassword: yup.string().min(6, 'At least 6 characters').required(),
	repeatPassword: yup
		.string()
		.required('Please retype your new password')
		.oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});
