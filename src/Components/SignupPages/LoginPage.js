import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../Redux/PetSignUpSlice";
import InputComponent from "../InputComponent";
import { required, isConfirmPassword } from "../../helper/formValidation";
export default function LoginPage({ isLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.PetSignUp.loginInfo);
  const [isErrorLabel, setIsErrorLabel] = useState(false);
  const onSubmitHandler = (form) => {
    console.log("FORM VALUES", form);
    dispatch(setLogin(form));
    navigate("/humanProfile");
  };
const showlabelRed = flag => {
  setIsErrorLabel(flag)
}
  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        email: formValue.email,
        password: formValue.password,
        privacypolicycheckbox: formValue.privacypolicycheckbox,
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className=" h-full ">
            <div className=" p-[18px] xl:p-[25px] w-full lg:w-[80%] xl:w-[70%] mx-auto">
              <div className="">
                <h4 className="text-gray_blue font-henriette font-bold text-6xl xl:text-8xl leading-35 xl:leading-56 text-left">
                  Good news! We care for pets in Winter Park.Let's create your
                  account.
                </h4>
              </div>

              <div className="mb-2   mt-[20px] mx-auto  ">
                <label
                  className="block text-xl xl:text-3xl font-normal text-gray-500"
                  for="emailId"
                >
                  Email ID
                </label>

                <InputComponent
                  name="email"
                  component="input"
                  placeholder="Enter email id"
                  type="text"
                  validate={required}
                />
              </div>

              {isLogin ? (
                <div className="mb-2   mx-auto">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="password"
                  >
                    Password
                  </label>
                  <InputComponent
                    name="password"
                    component="input"
                    placeholder="******"
                    type="password"
                    validate={required}
                  />
                </div>
              ) : (
                <div className=" grid grid-cols-2 gap-4 mx-auto">
                  <div className="mb-2  inline-block">
                    <label
                      className="block text-xl xl:text-3xl font-normal text-gray-500"
                      for="password"
                    >
                      Password
                    </label>
                    <InputComponent
                      name="password"
                      component="input"
                      placeholder="******"
                      type="password"
                      validate={required}
                    />
                  </div>
                  <div className="mb-2  inline-block ml-[0px]">
                    <label
                      className="block text-xl xl:text-3xl font-normal text-gray-500"
                      for="password"
                    >
                      Confirm password
                    </label>
                    <InputComponent
                      name="confirm password"
                      component="input"
                      placeholder="******"
                      type="password"
                      validate={isConfirmPassword}
                    />
                  </div>
                </div>
              )}
              <div className="flex mb-2   mx-auto">
                <InputComponent
                  name="privacypolicycheckbox"
                  component="input"
                  placeholder="******"
                  className="form-checkbox border-2 border-red-500 h-5 w-5  "
                  type="checkbox"
                  validate={required}
                  showlabelRed={showlabelRed}
                />

                <label
                  for="privacy-policy-checkbox"
                  className={
                    "ml-2 block font-basic-sans text-xl xl:text-3xl " +
                    (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                  }
                >
                  I have read the Privacy Policy and agree to the Terms of
                  Service .
                </label>
              </div>
            </div>
            <div className="fixed bottom-[0px] w-[100%] md:w-3/4 py-[15px] xl:py-[20px] bg-white_color grid grid-cols-2 ">
              <p className="text-gray_blue  font-basic-sans">
                <span className="text-grayish_blue">
                  {isLogin ? "Not a member?" : "Already a member?"}{" "}
                </span>
                <span
                  onClick={() => {
                    isLogin ? navigate("/service-location") : navigate("/home");
                  }}
                  className="text-gray_blue"
                >
                  {isLogin ? "Signup" : "Login"}
                </span>
              </p>
              <div>
                <button
                  type="submit"
                  className="bg-gray_blue px-[30px] xl:px-[50px] py-[6px] xl:py-[8px] text-white inline-block rounded-[20px] text-right text-lg xl:text-2xl font-basic-sans"
                >
                  {isLogin ? "Login" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    />
  );
}
