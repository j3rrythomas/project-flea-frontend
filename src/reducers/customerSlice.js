import { createSlice } from "@reduxjs/toolkit";

const initialCustomerState = {
  cart: {},
  itemCount: 0,
};
const authSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart[action.payload.productId]) {
        state.cart[action.payload.productId] += 1;
      } else {
        state.cart[action.payload.productId] = 1;
      }
      state.itemCount += action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      delete state.cart[action.payload.productId];
      state.itemCount -= state[action.payload.productId].quantity;
    },
    decreaseQuantity: (state, action) => {
      state.cart[action.payload.productId] -= 1;
      if (state.cart[action.payload.productId].quantity == 0) {
        delete state.cart[action.payload.productId];
      }
      state.itemCount -= 1;
    },
    increaseQuantity: (state, action) => {
      state.cart[action.payload.productId] += 1;
      state.itemCount -= 1;
    },
    emptyCart: (state) => {
      state.cart = {};
      state.itemCount = 0;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  emptyCart,
} = authSlice.actions;
export default authSlice.reducer;
