import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  authToken: "",
  userId: "",
  role: "",
  profilePic: "",
  fullName: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      const { userId, authToken, role, profilePic, fullname } = action.payload;
      state.userId = userId;
      state.authToken = authToken;
      state.isAuthenticated = true;
      state.role = role;
      state.profilePic = profilePic;
      state.fullName = fullname;
    },
    logout: (state) => {
      state.userId = "";
      state.authToken = "";
      state.isAuthenticated = false;
      state.role = "";
      state.profilePic = "";
      state.fullName = "";
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
