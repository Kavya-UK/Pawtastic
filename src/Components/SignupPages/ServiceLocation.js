import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { setZipDetails } from "../../Redux/PetSignUpSlice";
import InputComponent from "../InputComponent";

export default function ServiceLocation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.PetSignUp.zipCodeInfo);

  const onSubmitHandler = (form) => {
    console.log("FORM VALUES", form);
    dispatch(setZipDetails(form));
    navigate("/signup");
  };

  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        zipcode: formValue.zipcode,
      }}
      render={({ handleSubmit }) => (
        <form className=" h-[100%] " onSubmit={handleSubmit}>
          <div className=" h-[100%] ">
            <div className=" h-[100%] flex justify-center items-center flex-col mx-auto">
              <div className=" mx-auto w-full xl:w-[50%] ">
                <h5 className="text-gray_blue font-henriette font-bold text-6xl xl:text-8xl leading-35 xl:leading-56 ">
                  First, let's make
                  <br />
                  sure we serve
                  <br />
                  your area.
                </h5>
              </div>

              <div className=" mx-auto w-[40%] md:w-[20%] mt-[50px] ">
                <InputComponent
                  name="zipcode"
                  component="input"
                  placeholder="Enter zipcode"
                  type="text"
                />
              </div>
            </div>
            <div className="fixed bottom-[0px] w-full md:w-4/5  bg-white_color grid grid-cols-2 ">
              <span></span>
              <div className="py-[15px] xl:py-[20px] ">
                <button
                  type="submit"
                  className="bg-gray_blue px-[30px] md:px-[50px] py-[6px] xl:py-[8px] text-white inline-block rounded-[20px] text-right"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    />
  );
}
