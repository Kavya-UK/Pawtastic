import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../Redux/PetSignUpSlice";

export default function LoginPage({ isLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.PetSignUp.loginInfo);

  const onSubmitHandler = (form) => {
    console.log("FORM VALUES", form);
    dispatch(setLogin(form));
    navigate("/humanProfile");
  };

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
          <div className="bg-shaded_pink h-full">
            <div className=" p-[18px] xl:p-[25px] ">
              <div className="w-full xl:w-[60%] mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-5xl xl:text-8xl leading-25 xl:leading-56 text-center xl:text-left">
                  Good news! We care for <br/> pets in Winter Park.Let's <br/>create your
                  account.
                </h4>
              </div>

              <div className="mb-4  w-[100%] xl:w-[60%] mt-[20px] mx-auto  ">
                <label
                  className="block text-xl xl:text-3xl font-normal text-gray-500"
                  for="emailId"
                >
                  Email ID
                </label>
                <Field
                  name="email"
                  component="input"
                  placeholder="Enter email id"
                  className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                />
              </div>

              {isLogin ? (
                <div className="mb-4 w-[100%] xl:w-[60%] mt-[20px] mx-auto">
                  <label
                    className="block text-xl xl:text-3xl font-normal text-gray-500"
                    for="password"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    component="input"
                    placeholder="******"
                    className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    type="password"
                  />
                </div>
              ) : (
                <div className="w-[100%] xl:w-[60%] grid grid-cols-2 gap-4 mx-auto">
                  <div className="mb-4 mt-[20px] inline-block">
                    <label
                      className="block text-xl xl:text-3xl font-normal text-gray-500"
                      for="password"
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      component="input"
                      placeholder="******"
                      className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      type="password"
                    />
                  </div>
                  <div className="mb-4 mt-[20px] inline-block ml-[0px]">
                    <label
                      className="block text-xl xl:text-3xl font-normal text-gray-500"
                      for="password"
                    >
                      Confirm password
                    </label>
                    <Field
                      name="confirm password"
                      component="input"
                      placeholder="******"
                      className="w-full px-4 py-3 mt-1 text-xl xl:text-3xl text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      type="password"
                    />
                  </div>
                </div>
              )}
              <div className="flex mb-4 w-[100%] xl:w-[60%] mt-[20px] mx-auto">
                <Field
                  name="privacypolicycheckbox"
                  component="input"
                  placeholder="******"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  type="checkbox"
                />
                {/* <input
                  id="privacy-policy-checkbox"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                /> */}
                <label
                  for="privacy-policy-checkbox"
                  className="ml-2 block font-basic-sans text-xl xl:text-3xl text-grayish_blue"
                >
                  I have read the Privacy Policy and agree to the Terms of
                  Service .
                </label>
              </div>
            </div>
            <div className="fixed bottom-[0px] w-[100%] xl:w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
              <p className="text-gray_blue  font-basic-sans">
                <span className="text-grayish_blue">
                  {isLogin ? "Not a member?" : "Already a member?"}{" "}
                </span>
                <span
                  onClick={() => {
                    isLogin ? navigate("/humanprofile") : navigate("/home");
                  }}
                  className="text-gray_blue"
                >
                  {isLogin ? "Signup" : "Login"}
                </span>
              </p>
              <div>
                <button
                  type="submit"
                  // onClick={() => {
                  //   isLogin
                  //     ? navigate("/petType")
                  //     : navigate("/humanProfile");
                  // }}
                  className="bg-gray_blue text-lg xl:text-2xl px-[42px] xl:px-[80px] ml-[20px] py-[6px] xl:py-[8px] text-white inline-block rounded-[20px]"
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
