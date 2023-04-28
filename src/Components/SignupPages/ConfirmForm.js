import React from "react";

import { useNavigate } from "react-router-dom";
import PetProfile from "../PetProfile";
import { useSelector } from "react-redux";

export default function ConfirmForm() {
  const navigate = useNavigate();
  const petbasic = useSelector((state) => state.PetSignUp.petbasic);
  const petdetail = useSelector((state) => state.PetSignUp.petdetail);
  

  return (
    <div className="bg-shaded_pink h-[100%]">
      <div className="p-[25px] ">
        <div className="w-[60%] mx-auto">
          <h4 className="text-gray_blue font-henriette font-bold text-[45px] leading-56 text-left">
            Okay, Ginger’s all set!
            <br />
            We can’t wait to meet her.
          </h4>
        </div>
        <div className="w-[60%] mx-auto ">
          <PetProfile
            petDetails={petbasic}
            petDetaill={petdetail}
            />
        </div>

        <div className="w-[60%] mx-auto text-center mt-[30px] ">
          <span className="text-grayish_blue text-lg font-basic-sans font-light leading-32">
            Got more pets? Lucky you!
          </span>
          <span className="text-gray_blue text-lg font-basic-sans font-light leading-32">
            {" "}
            Add another pet profile
          </span>
        </div>
      </div>
      <div className="fixed bottom-[0px] w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
        <div>
          <button
            onClick={() => {
              navigate("/vetdetails");
            }}
            className="bg-white font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
          >
            Back
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="bg-gray_blue font-light font-basic-sans text-2xl px-[80px] ml-[20px] py-[8px] text-white inline-block rounded-[20px]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
