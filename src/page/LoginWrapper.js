import React from "react";
import LoginSidebar from "../Components/SideBars/LoginSidebar";

export default function LoginWrapper({ SideBarimg, sidebarTitle, children }) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="hidden md:block w-1/5 bg-fixed  bg-gray_blue">
        <LoginSidebar bgSideBarImg={SideBarimg} sidebarTitle={sidebarTitle} />
      </div>
      <div className="w-[100%] md:w-4/5 bg-shaded_pink">{children}</div>
    </div>
  );
}
