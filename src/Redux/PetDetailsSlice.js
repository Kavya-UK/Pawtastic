import { createSlice } from "@reduxjs/toolkit";

const initialState = { petdetail: {} };

const PetDetailsSlice = createSlice({
  name: "pdetails",
  initialState,
  reducers: {
    setPetDetails(state, actions) {
      state.petdetail = actions.payload;
    },
  },
});

export const { setPetDetails } = PetDetailsSlice.actions;
export default PetDetailsSlice.reducer;
