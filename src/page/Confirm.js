import SignUpWrapper from "./SignUpWrapper";
import ConfirmForm from "../Components/SignupPages/ConfirmForm";
import puppy from "../images/puppy_01.png"

export default function ConfirmPage() {
  return (
    <SignUpWrapper pageTitle="confirm" pageimg={puppy} >
        <ConfirmForm />
    </SignUpWrapper>
  )
}
