import React from "react";
import SecondarySideBarWrapper from "./SecondarySideBarWrapper";
import PaymentMethodForm from "../Components/MyProfile/PaymentMethodForm";
const PaymentMethod=()=> {
  return (
    <SecondarySideBarWrapper>
      <PaymentMethodForm />
    </SecondarySideBarWrapper>
  );
}
export default PaymentMethod;