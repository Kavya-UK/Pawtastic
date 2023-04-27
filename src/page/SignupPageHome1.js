import React from 'react'
import LoginWrapper from "./LoginWrapper";
import SignupPage1 from '../Components/SignupPages/SignupPage1';
import SideBarimg from "../images/Signup-1.png";

export default function SignupPageHome1() {
  return (
    <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="Why our service?">
      <SignupPage1 />
    </LoginWrapper>

  );
}
