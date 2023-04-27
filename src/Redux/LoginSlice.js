import { createSlice } from "@reduxjs/toolkit";

const initialState = { loginInfo: {} };

const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setLogin(state, actions) {
      state.loginInfo = actions.payload;
    },
  },
});

export const { setLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
