import React from "react";
import SideBar from "../Components/SideBars/SideBar";
export default function SideBarWrapper({ children }) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="hidden md:block min-w-[280px] w-1/4 bg-fixed  bg-gray_blue">
        <SideBar />
      </div>
      <div className="w-full md:w-3/4 bg-shaded_pink">{children}</div>
    </div>
  );
}
