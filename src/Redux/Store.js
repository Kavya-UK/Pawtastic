import { configureStore } from "@reduxjs/toolkit";
import PetSignUpSlice from "./PetSignUpSlice";

export const store = configureStore({
  reducer: {
    PetSignUp: PetSignUpSlice,
  },
});
