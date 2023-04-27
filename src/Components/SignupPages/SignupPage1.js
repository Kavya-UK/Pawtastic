import React from "react";
import { useNavigate } from "react-router-dom";
export default function SignupPage1() {
    const navigate = useNavigate();
  return (
    <div className="bg-shaded_pink h-[100%]">
      <div className="p-[25px] flex flex-col justify-center h-[100%]">
        <div className="text-left mx-auto w-[50%] ">
          <h5 className="text-gray_blue font-henriette font-bold text-[45px] leading-56 ">
            First, let's make
            <br />
            sure we serve
            <br />
            your area.
          </h5>
        </div>

        <div className="text-left mx-auto w-[50%] mt-[50px] ">
          <input
            className="w-[60%] px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text"
            placeholder="Zip code"
            id="zipcode"
          />
        </div>
      </div>
      <div className="fixed bottom-[0px] w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
        <span></span>
        <div className="">
          <button
            onClick={() => navigate("/SignupPage2")}
            className="bg-gray_blue px-[80px] ml-[20px] py-[8px] text-white inline-block rounded-[20px] text-right"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
