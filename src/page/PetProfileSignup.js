import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import PetProfileSignup from "../Components/SignupPages/PetprofileSignup";
import dog from "../images/dog_01.png"

export default function SignupPageHome4() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="md:w-1/5 md:block hidden bg-fixed bg-gray_blue">
        <SignupPage3SideBar pageTitle="petBasic" pageimg={dog} />
      </div>
      <div className="w-full xl:w-4/5 bg-shaded_pink">
        <PetProfileSignup />
      </div>
    </div>
  );
}
