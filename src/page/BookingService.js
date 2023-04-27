import React from 'react'
import LoginWrapper from "./LoginWrapper";
import SideBarimg from "../images/dog4.png"
import BookingServiceForm from '../Components/Booking/BookingServiceForm';

 const BookingService=()=> {
  return (
    <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="All services include:">
      <BookingServiceForm />
    </LoginWrapper>
  );
}
export default BookingService;
