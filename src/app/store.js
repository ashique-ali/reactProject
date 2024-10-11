import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    cartItem: cartReducer
  }
});

export default store;
