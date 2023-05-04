import React, { useState } from "react";
import Dogo from "../../images/dogo.png";
import cat from "../../images/cat-2.png";
import bird from "../../images/birdy2.png";
import hamster from "../../images/hamster.png";
import { json, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { setpetLabel } from "../../Redux/PetSignUpSlice";
import { required } from "../../helper/formValidation";

import Footer from "../Footer";

export default function PetType() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.PetSignUp.petType);
  const [error, setError] = useState("\xa0");
  const onSubmitHandler = (form) => {
    console.log("FORM VALUES", form);
    dispatch(setpetLabel(form));
    navigate("/petprofilesignup");
  };

  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        label: formValue.label,
      }}
      render={({ handleSubmit }) => (
        <form className="h-[100%]" onSubmit={handleSubmit}>
          <div className=" h-[100%]">
            <div className="p-[25px]  w-full lg:w-[80%] xl:w-[70%] mx-auto">
              <div className="  mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-6xl xl:text-8xl leading-35 xl:leading-56 text-left">
                  Nice to meet you, Meagan. Tell us all about your furry,
                  feathery, or scaley friend.
                </h4>
              </div>
              <div className=" mx-auto  mt-[20px] xl:mt-[30px] mb-[10px] text-2xl xl:text-3xl">
                <p className="text-start text-gray_blue  font-basic-sans">
                  Label
                </p>
              </div>
              <div className=" grid grid-cols-4 mx-auto bg-white text-lg xl:text-2xl ">
                <Field
                  name="label"
                  parse={() => "Dog"}
                  validate={(value, form) => required(value, form, "label")}
                >
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
                <Field name="label" parse={() => "Cat"} validate={(value, form) => required(value, form, "label")}>
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
                <Field name="label" parse={() => "Bird"} validate={(value, form) => required(value, form, "label")}>
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
                <Field name="label" parse={() => "Mouse"} validate={(value, form) => required(value, form, "label")}>
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
                        {meta.error && meta.touched
                          ? setError("Please select your pet type")
                          : setError("\xa0")}
                        <img src={hamster} alt="Avatar" className="w-[60px] " />
                        <p className="">Mouse</p>
                      </div>
                    );
                  }}
                </Field>
              </div>
              <div className="text-left block text-red-700">{error}</div>
              <div className=" mx-auto text-start mt-[10px] text-2xl xl:text-3xl">
                <p className="text-gray_blue  font-basic-sans font-ligh leading-32">
                  Have multiple pets? That’s awesome. You can create additional
                  pet profiles for the whole family later.
                </p>
              </div>
            </div>
            <Footer
              leftTitle={"Back"}
              rightTitle={"Next"}
              leftNavigation={"/humanProfile"}
              type="submit"
            />
          </div>
        </form>
      )}
    />
  );
}
