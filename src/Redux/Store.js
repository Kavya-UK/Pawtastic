import { configureStore } from "@reduxjs/toolkit";
import PetSignUpSlice from "./PetSignUpSlice";
import PetDetailsSlice from "./PetDetailsSlice"
import HumanProfileSlice from "./HumanProfileSlice";
import LoginSlice from "./LoginSlice";
import PetTypeSlice from "./PetTypeSlice";
import VetDetailSlice from "./VetDetailSlice";
export const store = configureStore({
  reducer: {
    PetSignUp: PetSignUpSlice,
    PetsDetails: PetDetailsSlice,
    userDetails: HumanProfileSlice,
    loginDetails: LoginSlice,
    PetLabel: PetTypeSlice,
    vetenaryinfo: VetDetailSlice
  },
});
