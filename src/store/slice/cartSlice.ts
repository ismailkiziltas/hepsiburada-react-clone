import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../types';

interface CartState {
    items: CartItem[];
    totalAmount: number;
    totalItems: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(
                item => item.product.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    product: action.payload,
                    quantity: 1,
                });
            }

            cartSlice.caseReducers.calculateTotals(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                item => item.product.id !== action.payload
            );
            cartSlice.caseReducers.calculateTotals(state);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.items.find(
                item => item.product.id === action.payload.id
            );

            if (item) {
                item.quantity = action.payload.quantity;
            }

            cartSlice.caseReducers.calculateTotals(state);
        },
        calculateTotals: (state) => {
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce(
                (total, item) => total + item.product.price * item.quantity,
                0
            );
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;