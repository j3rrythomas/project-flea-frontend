import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  authToken: "",
  userId: "",
  role: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      const { userId, authToken, role } = action.payload;
      state.userId = userId;
      state.authToken = authToken;
      state.isAuthenticated = true;
      state.role = role;
    },
    logout: (state) => {
      state.userId = "";
      state.authToken = "";
      state.isAuthenticated = false;
      state.role = "";
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
