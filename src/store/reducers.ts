import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import productsReducer from './products/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	products: productsReducer,
});

export default rootReducer;
