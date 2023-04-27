import React from "react";
import SideBar from "../Components/SideBars/SideBar";
import SecondarySideBar from "../Components/SideBars/Secondary-SideBar";
import PaymentMethodForm from "../Components/MyProfile/PaymentMethodForm";
const PaymentMethod=()=> {
  return (
    <div className=" h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-4 ">
          <div className="grid grid-cols-2 h-screen">
            <div className=" hidden lg:block bg-fixed bg-gray_blue border-r-[1px]">
              <SideBar />
            </div>
            <div className=" hidden lg:block bg-fixed bg-gray_blue">
              <SecondarySideBar />
            </div>
          </div>
        </div>

        <div className="col-span-8 ">
          <PaymentMethodForm />
        </div>
      </div>
    </div>
  );
}
export default PaymentMethod;