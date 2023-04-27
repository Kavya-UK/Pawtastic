import React from "react";
import LoginWrapper from "./LoginWrapper";
import SideBarimg from "../images/cat4.png";
import BookingPaymentForm from "../Components/Booking/BookingPaymentForm";

const BookingPayment = () => {
  return (
    <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="All services include:">
      <BookingPaymentForm />
    </LoginWrapper>
  );
};
export default BookingPayment;
