import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IProduct } from '../../interfaces';
import { getAllProducts, getProductBySlug, setAllProducts } from './actions';

interface State {
	loading: boolean;
	error: boolean;
	errorMessage: string | null;
	allProducts: IProduct[] | [];
	product: IProduct | null;
}

const initialState: State = {
	loading: false,
	error: false,
	errorMessage: null,
	allProducts: [],
	product: null,
};
const productsStore = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProducts.pending, (state) => {
			state.loading = true;
		});

		builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.allProducts = payload as IProduct[];
		});

		builder.addCase(getProductBySlug.pending, (state) => {
			state.loading = true;
		});

		builder.addCase(getProductBySlug.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.product = payload as IProduct;
		});

		builder.addCase(setAllProducts, (state, { payload }) => {
			state.allProducts = payload;
		});

		builder.addMatcher(
			isAnyOf(getAllProducts.rejected, getProductBySlug.rejected),
			(state, action) => {
				state.loading = false;
				state.error = true;
				state.errorMessage = action.payload as string;
			},
		);
	},
});

export default productsStore.reducer;
