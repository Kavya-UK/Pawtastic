import React from "react";
import PetInfoForm from "../Components/Booking/PetInfoForm";
import SideBarimg from "../images/dog5.png";
import LoginWrapper from "./LoginWrapper";

export default function PetInfo() {
  return (
    <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="All services include:">
      <PetInfoForm/>
    </LoginWrapper>
  );
}
