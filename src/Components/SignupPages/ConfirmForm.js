import React from "react";

import { useNavigate } from "react-router-dom";
import PetProfile from "../PetProfile";
import { useSelector } from "react-redux";
import Footer from "../Footer";

export default function ConfirmForm() {
  const navigate = useNavigate();
  const petbasic = useSelector((state) => state.PetSignUp.petbasic);
  const petdetail = useSelector((state) => state.PetSignUp.petdetail);
  

  return (
    <div className="bg-shaded_pink h-[100%]">
      <div className="p-[25px] w-full lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="">
          <h4 className="text-gray_blue font-henriette font-bold text-[45px] leading-56 text-left">
            Okay, Ginger’s all set! We can’t wait to meet her.
          </h4>
        </div>
        <div className=" ">
          <PetProfile petDetails={petbasic} petDetaill={petdetail} />
        </div>

        <div className=" text-center mt-[30px] ">
          <span className="text-grayish_blue text-lg font-basic-sans font-light leading-32">
            Got more pets? Lucky you!
          </span>
          <span className="text-gray_blue text-lg font-basic-sans font-light leading-32">
            {" "}
            Add another pet profile
          </span>
        </div>
      </div>
      <Footer
        leftTitle={"Back"}
        rightTitle={"Sign Up"}
        leftNavigation={"/vetdetails"}
        onClick={() => {
          navigate("/home");
        }}
      />
    </div>
  );
}
