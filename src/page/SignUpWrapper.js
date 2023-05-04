import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";

export default function SignUpWrapper({ pageTitle, pageimg, children }) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className=" hidden md:block min-w-[280px] w-1/4 bg-fixed bg-gray_blue ">
        <SignupPage3SideBar pageTitle={pageTitle} pageimg={pageimg} />
      </div>
      <div className="w-full h-[100vh] overflow-auto md:w-3/4 bg-shaded_pink">
        {children}
      </div>
    </div>
  );
}
