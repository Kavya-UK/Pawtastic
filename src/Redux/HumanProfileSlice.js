import { createSlice } from "@reduxjs/toolkit";

const initialState = { userinfo: {} };

const HumanProfileSlice = createSlice({
  name: "UserInformation",
  initialState,
  reducers: {
    setHumanProfile(state, actions) {
      state.userinfo = actions.payload;
    },
  },
});

export const { setHumanProfile } = HumanProfileSlice.actions;
export default HumanProfileSlice.reducer;
