import React from "react";
import LoginSidebar from "../Components/SideBars/LoginSidebar";

export default function LoginWrapper({ SideBarimg, sidebarTitle, children }) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="hidden md:block min-w-[300px] w-1/4 bg-fixed  bg-gray_blue">
        <LoginSidebar bgSideBarImg={SideBarimg} sidebarTitle={sidebarTitle} />
      </div>
      <div className="w-full md:w-3/4 bg-shaded_pink">{children}</div>
    </div>
  );
}
