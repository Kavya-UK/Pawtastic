import React from "react";
import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";

export default function SignUpWrapper({ pageTitle, pageimg, children }) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className={" md:w-1/5 bg-fixed bg-gray_blue hidden md:block "}>
        <SignupPage3SideBar pageTitle={pageTitle} pageimg={pageimg} />
      </div>
      <div className="w-full h-[100vh] overflow-auto md:w-4/5 bg-shaded_pink">
        {children}
      </div>
    </div>
  );
}
