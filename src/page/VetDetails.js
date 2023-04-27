import SignupPage3SideBar from "../Components/SideBars/SignupPage3SideBar";
import pug from "../images/pug_01.png"
import VetDetailsForm from "../Components/SignupPages/VetDetailsForm";

export default function VetDetails() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/3 bg-fixed bg-gray_blue">
        <SignupPage3SideBar pageTitle="petDetails" pageimg={pug} />
      </div>
      <div className="w-2/3 ">
        <VetDetailsForm />
      </div>
    </div>
  );
}
