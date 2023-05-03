import React from "react";
import SignUpWrapper from "./SignUpWrapper";
import HumanProfile from "../Components/SignupPages/HumanProfile";
import petnhuman from "../images/Signup-3.png";

export default function SignupPageHome3() {

  return (
    <SignUpWrapper pageTitle="humanProfile" pageimg={petnhuman}>
      <HumanProfile />
    </SignUpWrapper>
  );
}
