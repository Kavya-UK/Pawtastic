import React from 'react'
import LoginWrapper from "./LoginWrapper";
import ServiceLocation from '../Components/SignupPages/ServiceLocation';
import SideBarimg from "../images/Signup-1.png";

export default function ServiceLocationPage() {
  return (
    <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="Why our service?">
      <ServiceLocation />
    </LoginWrapper>
  );
}
