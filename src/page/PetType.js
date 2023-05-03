import React from "react";
import SignUpWrapper from "./SignUpWrapper";
import PetType from "../Components/SignupPages/PetType";
import catwalk from "../images/cat-walk_01.png"

export default function SignupPageHome3() {
  return (
    <SignUpWrapper pageTitle="petBasic" pageimg={catwalk}>
      <PetType />
    </SignUpWrapper>
  );
}
