import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import PetType from "../Components/SignupPages/PetType";
import catwalk from "../images/cat-walk_01.png"

export default function SignupPageHome3() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/3 bg-fixed  bg-gray_blue">
        <SignupPage3SideBar pageTitle="petBasic" pageimg={catwalk} />
      </div>
      <div className="w-2/3 ">
        <PetType />
      </div>
    </div>
  );
}
