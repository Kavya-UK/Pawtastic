import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import ConfirmForm from "../Components/SignupPages/ConfirmForm";
import puppy from "../images/puppy_01.png"

export default function ConfirmPage() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/3 bg-fixed bg-gray_blue">
        <SignupPage3SideBar pageTitle="confirm" pageimg={puppy} />
      </div>
      <div className="w-2/3 ">
        <ConfirmForm />
      </div>
    </div>
  );
}