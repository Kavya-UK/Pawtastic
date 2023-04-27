import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceReceipt from "../ServiceReceipt";

export default function ConfirmBookingForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-shaded_pink h-[100%] ">
      <div className=" w-[100%] lg:w-[60%] mx-[10px] lg:mx-auto ">
        <div className=" mx-auto pt-[30px] mb-[20px] lg:mb-[0px]">
          <h4 className="text-gray_blue font-henriette font-bold text-5xl lg:text-8xl leading-25 lg:leading-56 text-left ">
            Almost there, let’s just
            confirm all the details.
          </h4>
        </div>
        <ServiceReceipt />
      </div>
      <div className="fixed bottom-[0px]  py-[20px] bg-white_color grid grid-cols-2 w-[100%] md:w-2/3 ">
        <div>
          <button
            onClick={() => {
              navigate("/bookingpayment");
            }}
            className="bg-white font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
          >
            Back
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/scheduleservice");
            }}
            className="bg-gray_blue font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-white border-gray_blue inline-block rounded-[20px] "
          >
            Schedule Service
          </button>
        </div>
      </div>
    </div>
  );
}
