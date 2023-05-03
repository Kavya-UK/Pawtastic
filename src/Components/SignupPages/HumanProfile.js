import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {setHumanProfile} from "../../Redux/PetSignUpSlice"
import Footer from "../Footer";
import InputComponent from "../InputComponent";
import { required } from "../../helper/formValidation";


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
            <div className="p-[25px] w-full lg:w-[80%] xl:w-[70%] mx-auto ">
              <div className="  mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-6xl xl:text-8xl leading-35 xl:leading-56 text-left">
                  Hello! Please tell us a little bit about yourself.
                </h4>
              </div>

              <div className="  grid grid-cols-2 gap-4 mx-auto">
                <div className="mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="firstname"
                  >
                    First name
                  </label>

                  <InputComponent
                    name="firstname"
                    component="input"
                    placeholder="Your first name"
                    type="text"
                    validate={required}
                  />
                </div>
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block ml-[0px]">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="lastname"
                  >
                    Last name
                  </label>
                  <InputComponent
                    name="lastname"
                    component="input"
                    placeholder="Your last name"
                    type="text"
                    validate={required}
                  />
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-4 mx-auto">
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="phone"
                  >
                    Phone
                  </label>
                  <InputComponent
                    name="phone"
                    component="input"
                    placeholder="000-000-0000"
                    type="text"
                    validate={required}
                  />
                </div>
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block ml-[0px]">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="landline"
                  >
                    Landline
                  </label>
                  <InputComponent
                    name="landphone"
                    component="input"
                    placeholder="000-000-0000"
                    type="text"
                    validate={required}
                  />
                </div>
              </div>
              <div className=" grid grid-cols gap-4 mx-auto">
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="label"
                  >
                    Label
                  </label>
                  <InputComponent
                    name="label"
                    component="input"
                    placeholder="Placeholder text"
                    type="text"
                    validate={required}
                  />
                </div>
              </div>
              <div className=" grid grid-cols-4  gap-4 mx-auto">
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] col-span-4 md:col-span-2 inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="city"
                  >
                    City
                  </label>
                  <InputComponent
                    name="city"
                    component="input"
                    placeholder="City"
                    type="text"
                    validate={required}
                  />
                </div>
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block col-span-2 md:col-span-1">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="state"
                  >
                    State
                  </label>
                  <Field
                    name="state"
                    component="select"
                    className="w-full px-4 py-[8px] mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    validate={required}
                    <option value="FL">FL</option>
                    <option value="LA">LA</option>
                    <option value="DX">DX</option>
                  </Field>
                </div>
                <div className=" mb-[45px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block col-span-2 md:col-span-1">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="zip"
                  >
                    Zip
                  </label>
                  <InputComponent
                    name="zipcode"
                    component="input"
                    placeholder="xxxxx-xxxx"
                    type="text"
                    validate={required}
                  />
                </div>
              </div>
            </div>
            <Footer
              leftTitle={"Back"}
              rightTitle={"Next"}
              leftNavigation={"/signup"}
              type="submit"
            />
          </div>
        </form>
      )}
    />
  );
}
