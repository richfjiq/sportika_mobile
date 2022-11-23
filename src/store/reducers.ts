import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { cartReducer } from './cart';
import { productsReducer } from './products';
import { userReducer } from './user';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	products: productsReducer,
	cart: cartReducer,
});

export default rootReducer;
