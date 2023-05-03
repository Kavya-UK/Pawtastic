import React from "react";
import SignUpWrapper from "./SignUpWrapper";
import PetProfileSignup from "../Components/SignupPages/PetprofileSignup";
import dog from "../images/dog_01.png"

export default function SignupPageHome4() {
  return (
    <SignUpWrapper pageTitle="petBasic" pageimg={dog}>
      <PetProfileSignup />
    </SignUpWrapper>
  );
}
