import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import HumanProfile from "../Components/SignupPages/HumanProfile";
import petnhuman from "../images/Signup-3.png"

export default function SignupPageHome3() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className=" md:w-1/5 bg-fixed bg-gray_blue hidden md:block ">
        <SignupPage3SideBar pageTitle="humanProfile" pageimg={petnhuman} />
      </div>
      <div className="w-full md:w-4/5 bg-shaded_pink">
        <HumanProfile />
      </div>
    </div>
  );
}
