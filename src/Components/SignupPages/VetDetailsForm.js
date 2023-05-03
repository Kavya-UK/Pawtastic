import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch,useSelector } from "react-redux";
import { setVetDetails } from "../../Redux/PetSignUpSlice";
import Footer from "../Footer";
import InputComponent from "../InputComponent";

export default function VetDetailsForm() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const formValue = useSelector((state) => state.PetSignUp.vetInfo);


  const onSubmitHandler = (form) => {
    console.log("FORM VALUES", form);
    dispatch(setVetDetails(form));
    navigate("/confirm");
  };


  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        Veterinarianname: formValue.Veterinarianname,
        Veterinarianphonenumber: formValue.Veterinarianphonenumber,
        Label: formValue.Label,
        city: formValue.city,
        state: formValue.state,
        zipcode: formValue.zipcode,
      }}
      render={({ handleSubmit }) => (
        <form className=" h-[100%] " onSubmit={handleSubmit}>
          <div className="h-[100%] ">
            <div className="p-[25px]  w-full lg:w-[80%] xl:w-[70%] mx-auto">
              <div className=" mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-5xl xl:text-8xl leading-35 xl:leading-56 text-left">
                  Got a preferred vet? Let us know.
                </h4>
              </div>
              <div className=" xl:grid grid-cols-2 gap-4 mx-auto">
                <div className=" mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] ">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="firstname"
                  >
                    Veterinarian’s name
                  </label>
                  <InputComponent
                    name="Veterinarianname"
                    component="input"
                    placeholder="Veterinarian’s name"
                    type="text"
                  />
                </div>
                <div className="mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px]">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="phone"
                  >
                    Veterinarian's phone number
                  </label>
                  <InputComponent
                    name="Veterinarianphonenumber"
                    component="input"
                    placeholder="Veterinarian’s phone number"
                    type="text"
                  />
                </div>
              </div>

              <div className=" grid grid-cols gap-4 mx-auto">
                <div className="mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="label"
                  >
                    Label
                  </label>
                  <InputComponent
                    name="Label"
                    component="input"
                    placeholder="Placeholder text"
                    type="text"
                  />
                </div>
              </div>
              <div className=" grid grid-cols-4  gap-4 mx-auto">
                <div className="mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] col-span-2 inline-block">
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
                  />
                </div>
                <div className="mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <div className="col-span-1">
                    <label
                      className="block text-xl xl:text-3xl font-normal text-gray-500"
                      for="state"
                    >
                      State
                    </label>

                    <Field
                      name="state"
                      component="select"
                      className="w-full px-2 py-[9px] mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="FL">FL</option>
                      <option value="LA">LA</option>
                      <option value="DX">DX</option>
                    </Field>
                  </div>
                </div>
                <div className="mb-[1px] xl:mb-[5px] mt-[8px] xl:mt-[20px] inline-block">
                  <div className="col-span-1">
                    <label
                      className="block text-xl xl:text-3xl font-normal text-gray-500"
                      for="zip"
                    >
                      Zip
                    </label>
                    <InputComponent
                      name="zipcode"
                      component="input"
                      placeholder="367"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer
              leftTitle={"Back"}
              rightTitle={"Next"}
              leftNavigation={"/petDetails"}
              type="submit"
            />
          </div>
        </form>
      )}
    />
  );
}
