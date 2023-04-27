import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch,useSelector } from "react-redux";
import { setVetDetails } from "../../Redux/VetDetailSlice";


export default function VetDetailsForm() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const formValue = useSelector((state) => state.vetenaryinfo.vetInfo);


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
        <form onSubmit={handleSubmit}>
          <div className="bg-shaded_pink h-[100%]">
            <div className="p-[25px] ">
              <div className="w-[60%] mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-[45px] leading-56 text-left">
                  Got a preferred vet? <br />
                  Let us know.
                </h4>
              </div>
              <div className="w-[60%] grid grid-cols-2 gap-4 mx-auto">
                <div className="mb-[5px] mt-[20px] inline-block">
                  <label
                    className="block text-3xl font-normal text-gray-500"
                    for="firstname"
                  >
                    Veterinarian’s name
                  </label>
                  <Field
                    name="Veterinarianname"
                    component="input"
                    placeholder="Veterinarian’s name"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
                <div className="mb-[5px] mt-[20px] inline-block ml-[0px]">
                  <label
                    className="block text-3xl font-normal text-gray-500"
                    for="phone"
                  >
                    Veterinarian's phone number
                  </label>
                  <Field
                    name="Veterinarianphonenumber"
                    component="input"
                    placeholder="Veterinarian’s phone number"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>

              <div className="w-[60%] grid grid-cols gap-4 mx-auto">
                <div className="mb-[5px] mt-[20px] inline-block">
                  <label
                    className="block text-3xl font-normal text-gray-500"
                    for="label"
                  >
                    Label
                  </label>
                  <Field
                    name="Label"
                    component="input"
                    placeholder="Placeholder text"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[60%] grid grid-cols-4  gap-4 mx-auto">
                <div className="mb-[5px] mt-[20px] col-span-2 inline-block">
                  <label
                    className="block text-3xl font-normal text-gray-500"
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
                <div className="mb-[5px] mt-[20px] inline-block">
                  <div className="col-span-1">
                    <label
                      className="block text-3xl font-normal text-gray-500"
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
                </div>
                <div className="mb-[5px] mt-[20px] inline-block">
                  <div className="col-span-1">
                    <label
                      className="block text-3xl font-normal text-gray-500"
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
            </div>
            <div className="fixed bottom-[0px] w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
              <div>
                <button
                  onClick={() => {
                    navigate("/petDetails");
                  }}
                  className="bg-white font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  // onClick={() => {
                  //   navigate("/confirm");
                  // }}
                  className="bg-gray_blue px-[80px] ml-[20px] py-[8px] text-white inline-block rounded-[20px]"
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
