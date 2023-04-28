import React, { useState } from "react";
import Dogo from "../../images/dogo.png";
import cat from "../../images/cat-2.png";
import bird from "../../images/birdy2.png";
import hamster from "../../images/hamster.png";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch,useSelector } from "react-redux";
import { setpetLabel } from "../../Redux/PetSignUpSlice";
   
export default function PetType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue=useSelector(state=>state.PetSignUp.petType)
  

  const onSubmitHandler = (form) => {
    console.log('FORM VALUES', form)
    dispatch(setpetLabel(form));
    navigate("/petprofilesignup");
  }

  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        label: formValue.label,
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className=" h-[100%]">
            <div className="p-[25px] ">
              <div className=" w-[100%] xl:w-[60%] mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-5xl xl:text-8xl leading-25 xl:leading-56 text-left">
                  Nice to meet you, Meagan. Tell us all about your furry,
                  feathery, or scaley friend.
                </h4>
              </div>
              <div className="w-[100%] xl:w-[60%] mx-auto  mt-[20px] xl:mt-[30px] mb-[10px] text-2xl xl:text-3xl">
                <p className="text-start text-gray_blue  font-basic-sans">
                  Label
                </p>
              </div>
              <div className="w-[100%] xl:w-[60%] grid grid-cols-4 mx-auto bg-white text-lg xl:text-2xl ">
                <Field name="label" parse={() => "Dog"}>
                  {({ input, meta }) => {
                    return (
                      <div
                        type="button"
                        onClick={input.onChange}
                        className={
                          "p-[10px] mx-[10px] sm:mx-[20px] my-[5px] flex flex-col items-center " +
                          (input.value === "Dog" ? "bg-pinkish_beige" : "")
                        }
                      >
                        <img src={Dogo} alt="Avatar" className="w-[60px] " />
                        <p className="">Dog</p>
                      </div>
                    );
                  }}
                </Field>
                <Field name="label" parse={() => "Cat"}>
                  {({ input, meta }) => {
                    return (
                      <div
                        type="button"
                        onClick={input.onChange}
                        className={
                          "p-[10px] mx-[10px] sm:mx-[20px] my-[5px] flex flex-col items-center " +
                          (input.value === "Cat" ? "bg-pinkish_beige" : "")
                        }
                      >
                        <img src={cat} alt="Avatar" className="w-[60px] " />
                        <p className="">Cat</p>
                      </div>
                    );
                  }}
                </Field>
                <Field name="label" parse={() => "Bird"}>
                  {({ input, meta }) => {
                    return (
                      <div
                        type="button"
                        onClick={input.onChange}
                        className={
                          "p-[10px] mx-[10px] sm:mx-[20px] my-[5px] flex flex-col items-center " +
                          (input.value === "Bird" ? "bg-pinkish_beige" : "")
                        }
                      >
                        <img src={bird} alt="Avatar" className="w-[60px] " />
                        <p className="">Bird</p>
                      </div>
                    );
                  }}
                </Field>
                <Field name="label" parse={() => "Mouse"}>
                  {({ input, meta }) => {
                    return (
                      <div
                        type="button"
                        onClick={input.onChange}
                        className={
                          "p-[10px] mx-[10px] sm:mx-[20px] my-[5px] flex flex-col items-center " +
                          (input.value === "Mouse" ? "bg-pinkish_beige" : "")
                        }
                      >
                        <img src={hamster} alt="Avatar" className="w-[60px] " />
                        <p className="">Mouse</p>
                      </div>
                    );
                  }}
                </Field>
              </div>
              <div className="w-[100%] xl:w-[60%] mx-auto text-start mt-[30px] text-2xl xl:text-3xl">
                <p className="text-gray_blue  font-basic-sans font-ligh leading-32">
                  Have multiple pets? That’s awesome. You can create additional
                  pet profiles for the whole family later.
                </p>
              </div>
            </div>
            <div className="fixed bottom-[0px] w-full xl:w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
              <div>
                <button
                  onClick={() => {
                    navigate("/humanProfile");
                  }}
                  className="bg-white font-light font-basic-sans text-lg xl:text-2xl ml-[20px] px-[42px] xl:px-[80px] py-[6px] xl:py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
                >
                  Back
                </button>
              </div>
              <div>
                
                <button
                  type="submit"
                  // onClick={() => {
                  //   navigate("/petprofilesignup");
                  // }}
                  className="bg-gray_blue font-light font-basic-sans  ml-[20px] px-[42px] xl:px-[80px] py-[6px] xl:py-[8px] text-white inline-block rounded-[20px]"
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
