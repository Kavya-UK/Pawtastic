import React from "react";
import SideBar from "../Components/SideBars/SideBar";
import SecondarySideBar from "../Components/SideBars/Secondary-SideBar";
export default function SideBarWrapper({ children }) {
  return (
    <div className=" h-screen">
      <div className="grid grid-cols-12 h-full">
        <div className="hidden lg:block col-span-4 ">
          <div className="  lg:grid grid-cols-2 h-screen">
            <div className="  bg-fixed bg-gray_blue border-r-[0.5px]">
              <SideBar isSecondarySideBar={true} />
            </div>
            <div className=" bg-fixed bg-gray_blue">
              <SecondarySideBar />
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 bg-shaded_pink h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
