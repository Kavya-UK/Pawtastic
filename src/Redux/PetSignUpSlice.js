import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  petbasic: {},
  petdetail: {},
  userinfo: {},
  loginInfo: {},
  petType: {},
  vetInfo: {},
  zipCodeInfo:{}
};

const PetSignUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setPetBasic(state, actions) {
      state.petbasic = actions.payload;
    },

    setPetDetails(state, actions) {
      state.petdetail = actions.payload;
    },
    setHumanProfile(state, actions) {
      state.userinfo = actions.payload;
    },
    setLogin(state, actions) {
      state.loginInfo = actions.payload;
    },
    setpetLabel(state, actions) {
      state.petType = actions.payload;
    },
    setVetDetails(state, actions) {
      state.vetInfo = actions.payload;
    },
    setZipDetails(state, actions) {
      state.zipCodeInfo = actions.payload;
    },
  },
});

export const {
  setPetBasic,
  setPetDetails,
  setHumanProfile,
  setLogin,
  setpetLabel,
  setVetDetails,
  setZipDetails,
} = PetSignUpSlice.actions;
export default PetSignUpSlice.reducer;
