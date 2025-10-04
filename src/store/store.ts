import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import favoritesReducer from './slice/favoritesSlice';
import userReducer from './slice/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;