import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces';
import { getAllProducts } from './actions';

interface State {
	loading: boolean;
	error: boolean;
	errorMessage: string | null;
	allProducts: IProduct[] | [];
	menProducts: IProduct[] | [];
	womenProducts: IProduct[] | [];
	girlsProducts: IProduct[] | [];
	boysProducts: IProduct[] | [];
}

const initialState: State = {
	loading: false,
	error: false,
	errorMessage: null,
	allProducts: [],
	menProducts: [],
	womenProducts: [],
	girlsProducts: [],
	boysProducts: [],
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

		builder.addMatcher(isAnyOf(getAllProducts.rejected), (state, action) => {
			state.loading = false;
			state.error = true;
			state.errorMessage = action.payload as string;
		});
	},
});

export default productsStore.reducer;
