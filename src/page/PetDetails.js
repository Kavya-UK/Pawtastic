import React from "react";
import SignUpWrapper from "./SignUpWrapper";
import PetDetails from "../Components/SignupPages/PetDetails";
import Catimage from "../images/cat_01.png"

export default function SignupPageHome5() {
  return (
    <SignUpWrapper pageTitle="petDetails" pageimg={Catimage}>
      <PetDetails />
    </SignUpWrapper>
  
  );
}
