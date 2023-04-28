import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {setHumanProfile} from "../../Redux/PetSignUpSlice"


export default function HumanProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formValue = useSelector((state) => state.PetSignUp.userinfo);

    const onSubmitHandler = (form) => {
      console.log("FORM VALUES", form);
      dispatch(setHumanProfile(form));
      navigate("/petType");
    };


  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        firstname: formValue.firstname,
        lastname: formValue.lastname,
        phone: formValue.phone,
        landphone: formValue.landphone,
        label: formValue.label,
        city: formValue.city,
        state: formValue.state,
        zipcode: formValue.zipcode,
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="bg-shaded_pink h-[100%]">
            <div className="p-[25px]  ">
              <div className=" w-[100%] xl:w-[60%] mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-5xl xl:text-8xl leading-25 xl:leading-56 text-left">
                  Hello! Please tell us a little bit about yourself.
                </h4>
              </div>

              <div className=" w-[100%] xl:w-[60%] grid grid-cols-2 gap-4 mx-auto">
                <div className="mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="firstname"
                  >
                    First name
                  </label>

                  <Field
                    name="firstname"
                    component="input"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block ml-[0px]">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="lastname"
                  >
                    Last name
                  </label>
                  <Field
                    name="lastname"
                    component="input"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[100%] xl:w-[60%] grid grid-cols-2 gap-4 mx-auto">
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="phone"
                  >
                    Phone
                  </label>
                  <Field
                    name="phone"
                    component="input"
                    placeholder="000-000-0000"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block ml-[0px]">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="landline"
                  >
                    Landline
                  </label>
                  <Field
                    name="landphone"
                    component="input"
                    placeholder="000-000-0000"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[100%] xl:w-[60%] grid grid-cols gap-4 mx-auto">
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="label"
                  >
                    Label
                  </label>
                  <Field
                    name="label"
                    component="input"
                    placeholder="Placeholder text"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[100%] xl:w-[60%] grid grid-cols-4  gap-4 mx-auto">
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] col-span-2 inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="city"
                  >
                    City
                  </label>
                  <Field
                    name="city"
                    component="input"
                    placeholder="City"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="state"
                  >
                    State
                  </label>
                  <Field
                    name="state"
                    component="select"
                    className="w-full px-4 py-[18px] mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="FL">FL</option>
                    <option value="LA">LA</option>
                    <option value="DX">DX</option>
                  </Field>
                </div>
                <div className=" mb-[45px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="zip"
                  >
                    Zip
                  </label>
                  <Field
                    name="zipcode"
                    component="input"
                    placeholder="367"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="fixed bottom-[0px]  w-full md:w-2/3 py-[5px] xl:py-[20px] bg-white_color grid grid-cols-2 ">
              <div>
                <button
                  onClick={() => {
                    navigate("/SignupPage2");
                  }}
                  className="bg-white font-light px-[42px] xl:px-[80px] py-[6px] xl:py-[8px] font-basic-sans text-lg xl:text-2xl  ml-[20px]  text-gray_blue border border-gray_blue inline-block rounded-[15px]"
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  // onClick={() => {
                  //   navigate("/petType");
                  // }}
                  className="bg-gray_blue px-[42px] xl:px-[80px] ml-[20px] py-[6px] xl:py-[8px] text-white font-basic-sans text-lg xl:text-2xl inline-block rounded-[20px]"
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
