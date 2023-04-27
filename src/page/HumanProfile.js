import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import HumanProfile from "../Components/SignupPages/HumanProfile";
import petnhuman from "../images/Signup-3.png"

export default function SignupPageHome3() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/3 bg-fixed bg-gray_blue">
        <SignupPage3SideBar pageTitle="humanProfile" pageimg={petnhuman} />
      </div>
      <div className="w-2/3 ">
        <HumanProfile />
      </div>
    </div>
  );
}
