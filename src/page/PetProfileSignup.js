import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import PetProfileSignup from "../Components/SignupPages/PetprofileSignup";
import dog from "../images/dog_01.png"

export default function SignupPageHome4() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/3 bg-fixed bg-gray_blue">
        <SignupPage3SideBar pageTitle="petBasic" pageimg={dog} />
      </div>
      <div className="w-2/3 ">
        <PetProfileSignup />
      </div>
    </div>
  );
}
