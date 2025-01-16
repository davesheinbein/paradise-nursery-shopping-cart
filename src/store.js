import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './pages/CartSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default store;
