import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Form, Field } from "react-final-form";
import {setPetBasic} from '../../Redux/PetSignUpSlice'
import { useDispatch, useSelector } from "react-redux";
   
export default function PetProfileSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.PetSignUp.petbasic);
  
  const onSubmitHandler = (form) => {
    console.log('FORM VALUES', form)
    dispatch(setPetBasic(form));
    navigate("/petDetails");
  }
  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        petname: formValue.petname,
        breed: formValue.breed,
        birthday: formValue.birthday,
        gender: formValue.gender,
        spayed: formValue.spayed,
        weight: formValue.weight,
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="h-[100%]">
            <div className="p-[25px] ">
              <div className=" w-full ]xl:w-[60%] mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-5xl xl:text-8xl leading-25 xl:leading-56 text-left">
                  Yay, we love dogs! Give us the basics about your pup.
                </h4>
              </div>

              <div className="w-full xl:w-[60%] grid grid-cols-2 gap-4 mx-auto">
                <div className="mb-[3px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block  text-xl xl:text-3xl font-normal text-gray-500"
                    for="Petname"
                  >
                    Name
                  </label>
                  <Field
                    name="petname"
                    component="input"
                    placeholder="Pet's name"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
                <div className="mb-[3px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block ml-[0px]">
                  <div class="  w-full max-w-xs mx-auto text-left ">
                    <label
                      for="uploadPhoto"
                      class=" inline-block w-12 h-12 bg-white rounded-full cursor-pointer relative top-[30px] xl:top-[40px] "
                    >
                      <FontAwesomeIcon
                        icon={faCamera}
                        className="font-gray_blue absolute top-[25%] left-[25%] transform translate-x-[12.5%] translate-y-[6.25%] "
                      />
                    </label>
                    <Field
                      name="petImage"
                      component="input"
                      className="hidden"
                      type="file"
                      id="uploadPhoto"
                    />

                    <span class="inline-block text-grayish_blue font-basis-sans text-center  text-lg xl:text-3xl relative top-[10px] xl:top-[20px] pl-[8px] xl:pl-[20px]">
                      Upload a photo
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[60%] grid grid-cols-2 gap-4 mx-auto">
                <div className="mb-[3px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block  text-xl xl:text-3xl font-normal text-gray-500"
                    for="breed"
                  >
                    Breed
                  </label>
                  <Field
                    name="breed"
                    component="input"
                    placeholder="Pet's breed"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
                <div className="mb-[3px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block ml-[0px]">
                  <label
                    className="block  text-xl xl:text-3xl font-normal text-gray-500"
                    for="birthday"
                  >
                    Birthday
                  </label>
                  <Field
                    name="birthday"
                    component="input"
                    placeholder="MM/DD/YYYY"
                    className=" text-lg xl:text-2xl w-full px-4 py-3 mt-1  text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="date"
                  />
                </div>
              </div>
              <div className="w-full xl:w-[60%] grid grid-cols-2 gap-4 mx-auto">
                <div className="mb-[3px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block  text-xl xl:text-3xl font-normal text-gray-500"
                    for="gender"
                  >
                    Gender
                  </label>

                  <div className="bg-white p-[5px] grid grid-cols-2 gap-4 py-[10px] text-gray_blue font-basic-sans text-lg xl:text-2xl">
                    <Field name="gender" parse={() => "Female"}>
                      {({ input, meta }) => {
                        return (
                          <button
                            type="button"
                            onClick={input.onChange}
                            className={
                              "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                              (input.value === "Female"
                                ? "bg-pinkish_beige"
                                : "")
                            }
                          >
                            Female
                          </button>
                        );
                      }}
                    </Field>
                    <Field name="gender" parse={() => "Male"}>
                      {({ input, meta }) => (
                        <button
                          type="button"
                          onClick={input.onChange}
                          className={
                            "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                            (input.value === "Male" ? "bg-pinkish_beige" : "")
                          }
                        >
                          Male
                        </button>
                      )}
                    </Field>
                  </div>
                </div>
                <div className="mb-[3px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block ml-[0px]">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="spayed"
                  >
                    Spayed or Neutured
                  </label>
                  <div className="bg-white p-[5px] grid grid-cols-2 gap-4 py-[10px] text-gray_blue font-basic-sans text-lg xl:text-2xl">
                    <Field name="spayed" parse={() => "Yes"}>
                      {({ input, meta }) => {
                        return (
                          <button
                            type="button"
                            onClick={input.onChange}
                            className={
                              "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                              (input.value === "Yes" ? "bg-pinkish_beige" : "")
                            }
                          >
                            Yes
                          </button>
                        );
                      }}
                    </Field>
                    <Field name="spayed" parse={() => "No"}>
                      {({ input, meta }) => {
                        return (
                          <button
                            type="button"
                            onClick={input.onChange}
                            className={
                              "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                              (input.value === "No" ? "bg-pinkish_beige" : "")
                            }
                          >
                            No
                          </button>
                        );
                      }}
                    </Field>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[60%]  mx-auto">
                <div className="mb-[3px] xl:mb-[5px] mt-[8px] xl:mt-[20px] ">
                  <label
                    className="block  text-xl xl:text-3xl font-normal text-gray-500"
                    for="weight"
                  >
                    Weight
                  </label>
                  <div className="bg-white p-[5px] grid grid-cols-4 xl:gap-4 py-[10px] text-gray_blue font-basic-sans text-lg xl:text-2xl">
                    <Field name="weight" parse={() => "10-20"}>
                      {({ input, meta }) => {
                        return (
                          <button
                            type="button"
                            onClick={input.onChange}
                            className={
                              "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                              (input.value === "10-20"
                                ? "bg-pinkish_beige"
                                : "")
                            }
                          >
                            10-20pounds
                          </button>
                        );
                      }}
                    </Field>
                    <Field name="weight" parse={() => "20-50"}>
                      {({ input, meta }) => {
                        return (
                          <button
                            type="button"
                            onClick={input.onChange}
                            className={
                              "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                              (input.value === "20-50"
                                ? "bg-pinkish_beige"
                                : "")
                            }
                          >
                            20-50 Pounds
                          </button>
                        );
                      }}
                    </Field>
                    <Field name="weight" parse={() => "50-100"}>
                      {({ input, meta }) => {
                        return (
                          <button
                            type="button"
                            onClick={input.onChange}
                            className={
                              "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                              (input.value === "50-100"
                                ? "bg-pinkish_beige"
                                : "")
                            }
                          >
                            50-100 Pounds
                          </button>
                        );
                      }}
                    </Field>
                    <Field name="weight" parse={() => "100+"}>
                      {({ input, meta }) => {
                        return (
                          <button
                            type="button"
                            onClick={input.onChange}
                            className={
                              "px-[0px] xl:px-[20px] py-[0px] xl:py-[5px] " +
                              (input.value === "100+" ? "bg-pinkish_beige" : "")
                            }
                          >
                            100+ Pounds
                          </button>
                        );
                      }}
                    </Field>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-[0px] w-full xl:w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
              <div>
                <button
                  onClick={() => {
                    navigate("/PetType");
                  }}
                  className="bg-white font-light font-basic-sans text-lg xl:text-2xl px-[42px] xl:px-[80px] py-[6px] xl:py-[8px] ml-[20px]  text-gray_blue border border-gray_blue inline-block rounded-[20px]"
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  // onClick={() => {
                  //   navigate("/petDetails");
                  // }}
                  className="bg-gray_blue ml-[20px] px-[42px] xl:px-[80px] py-[6px] xl:py-[8px] text-white text-lg xl:text-2xl inline-block rounded-[20px]"
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
