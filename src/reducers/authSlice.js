import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  authToken: "",
  userId: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      const { userId, authToken } = action.payload;
      state.userId = userId;
      state.authToken = authToken;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.userId = "";
      state.authToken = "";
      state.isAuthenticated = false;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
