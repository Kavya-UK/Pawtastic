import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../src/page/Home";
import Dashboard from "../src/page/Dashboard";
import SampleComponents from "../src/page/SampleComponents";
import ServiceLocationPage from "./page/ServiceLocationPage";
import SignupPage from "./page/SignupPage";
import PetType from "./page/PetType";
import HumanProfile from "./page/HumanProfile";
import PetProfileSignup from "./page/PetProfileSignup";
import PetDetails from "./page/PetDetails";
import VetDetails from "./page/VetDetails";
import ConfirmPage from "./page/Confirm";
import MyProfile from "./page/MyProfile";
import MyProfileServices from "./page/MyProfileServices";
import HomeAddress from "./page/HomeAddress";
import PaymentMethod from "./page/PaymentMethod";
import BookingService from "./page/BookingService";
import PetInfoForm from "./page/PetInfo";
import BookingPayment from "./page/BookingPayment";
import ConfirmBooking from "./page/ConfirmBooking";

const Routing=()=>{
    return (
      <BrowserRouter>
        <Routes>
          {/* Responsive */}
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>
          {/* Responsive */}
          <Route exact path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/dashboard" element={<Dashboard />}>
            {" "}
          </Route>
          <Route
            exact
            path="/service-location"
            element={<ServiceLocationPage />}
          >
            {" "}
          </Route>
          <Route exact path="/signup" element={<SignupPage />}>
            {" "}
          </Route>
          <Route exact path="/humanProfile" element={<HumanProfile />}>
            {" "}
          </Route>
          <Route exact path="/petType" element={<PetType />}>
            {" "}
          </Route>

          <Route exact path="/petprofilesignup" element={<PetProfileSignup />}>
            {" "}
          </Route>
          <Route exact path="/petdetails" element={<PetDetails />}>
            {" "}
          </Route>
          <Route exact path="/vetdetails" element={<VetDetails />}>
            {" "}
          </Route>
          <Route exact path="/confirm" element={<ConfirmPage />}>
            {" "}
          </Route>
          <Route exact path="/myprofile" element={<MyProfile />}>
            {" "}
          </Route>
          <Route
            exact
            path="/myprofileservices"
            element={<MyProfileServices />}
          >
            {" "}
          </Route>
          <Route exact path="/homeaddress" element={<HomeAddress />}>
            {" "}
          </Route>
          <Route exact path="/paymentmethod" element={<PaymentMethod />}>
            {" "}
          </Route>
          <Route exact path="/bookingservice" element={<BookingService />}>
            {" "}
          </Route>
          <Route exact path="/petinfo" element={<PetInfoForm />}>
            {" "}
          </Route>

          <Route exact path="/bookingpayment" element={<BookingPayment />}>
            {" "}
          </Route>
          <Route exact path="/confirmbooking" element={<ConfirmBooking />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default Routing;