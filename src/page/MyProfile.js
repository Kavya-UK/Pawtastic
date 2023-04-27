import React from "react";
import SideBar from "../Components/SideBars/SideBar";
import MyProfileForm from "../Components/MyProfile/MyProfileForm";

export default function MyProfile() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5 hidden lg:block bg-fixed bg-gray_blue">
        <SideBar />
      </div>
      <div className=" lg:w-4/5 ">
        <MyProfileForm />
      </div>
    </div>
  );
}
