import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity: 0,
};

export const cartSystem = createSlice({
    name: "cartItem",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const findItem = state.cart.findIndex((item) => {
                return item.id === action.payload.id;
            })
            if (findItem > 0) {
                state.cart[findItem].quantity += 1;
            } else {
                const singalItem = { ...action.payload, quantity: 1 }
                state.cart.push(singalItem);
            }
        },
    },
});

export const { addCart } = cartSystem.actions;
export default cartSystem.reducer;
