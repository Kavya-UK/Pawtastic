import { createSlice } from "@reduxjs/toolkit";

const initialState = { petType: {} };

const PetTypeSlice = createSlice({
  name: "petLabel",
  initialState,
  reducers: {
    setpetLabel(state, actions) {
      state.petType = actions.payload;
    },
  },
});

export const { setpetLabel } = PetTypeSlice.actions;
export default PetTypeSlice.reducer;
