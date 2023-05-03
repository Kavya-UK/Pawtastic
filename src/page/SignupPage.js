import React from "react";
import LoginWrapper from "./LoginWrapper";
import SideBarimg from "../images/Signup.png";
import SignUpPage from "../Components/SignupPages/LoginPage";

export default function SignupPageHome2() {
  return (
     <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="Why our service?">
      <SignUpPage isLogin={false} />
    </LoginWrapper>
  );
}
