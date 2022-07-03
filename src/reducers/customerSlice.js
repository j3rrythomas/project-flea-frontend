import { createSlice } from "@reduxjs/toolkit";

const initialCustomerState = {
  cart: {},
  itemCount: 0,
  price: 0,
};
const authSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity, price } = action.payload;
      if (state.cart[productId]) {
        state.cart[productId] += quantity;
      } else {
        state.cart[productId] = 1;
      }
      state.itemCount += quantity;
      state.price += price * quantity;
    },
    removeFromCart: (state, action) => {
      const { productId, price } = action.payload;
      state.itemCount -= state.cart[productId];
      state.price -= price * state.cart[productId];
      delete state.cart[productId];
    },
    decreaseQuantity: (state, action) => {
      state.cart[action.payload.productId] -= 1;
      if (state.cart[action.payload.productId].quantity == 0) {
        delete state.cart[action.payload.productId];
      }
      state.itemCount -= 1;
      state.price -= action.payload.price;
    },
    increaseQuantity: (state, action) => {
      state.cart[action.payload.productId] += 1;
      state.itemCount += 1;
      state.price += action.payload.price;
    },
    emptyCart: (state) => {
      state.cart = {};
      state.itemCount = 0;
      state.price = 0;
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
