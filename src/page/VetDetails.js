import SignUpWrapper from "./SignUpWrapper";
import pug from "../images/pug_01.png"
import VetDetailsForm from "../Components/SignupPages/VetDetailsForm";

export default function VetDetails() {
  return (
     <SignUpWrapper pageTitle="petDetails" pageimg={pug}>
      <VetDetailsForm />
    </SignUpWrapper>
  );
}
