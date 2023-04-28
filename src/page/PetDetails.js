import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import PetDetails from "../Components/SignupPages/PetDetails";
import Catimage from "../images/cat_01.png"

export default function SignupPageHome5() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5 bg-fixed bg-gray_blue">
        <SignupPage3SideBar pageTitle="petDetails" pageimg={Catimage} />
      </div>
      <div className="w-4/5 ">
        <PetDetails />
      </div>
    </div>
  );
}
