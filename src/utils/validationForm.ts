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
