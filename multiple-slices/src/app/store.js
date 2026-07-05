import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Accessible via state.auth
    cart: cartReducer, // Accessible via state.cart
  },
});
