import React from "react";
import LoginWrapper from "./LoginWrapper";
import LoginPage from "../Components/SignupPages/LoginPage";
import SideBarimg from "../images/Signup.png";

export default function Home() {
  return (
    <LoginWrapper SideBarimg={SideBarimg} sidebarTitle="Welcome">
      <LoginPage isLogin={true} />
    </LoginWrapper>
  );
}
