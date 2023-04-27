import React from "react";
import LoginWrapper from "./LoginWrapper";
import SideBarimg from "../images/pet5.png";
import ConfirmBookingForm from "../Components/Booking/ConfirmBookingForm";

const ConfirmBooking = () => {
  return (
    <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="All services include:">
      <ConfirmBookingForm />
    </LoginWrapper>

  );
};
export default ConfirmBooking;
