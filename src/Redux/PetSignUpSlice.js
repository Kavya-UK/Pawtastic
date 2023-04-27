import { createSlice } from "@reduxjs/toolkit";

const initialState = { petbasic:{}, };

const PetSignUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setPetBasic(state, actions) {
     state.petbasic = actions.payload
    },
  },
});

export const { setPetBasic } = PetSignUpSlice.actions;
export default PetSignUpSlice.reducer;
