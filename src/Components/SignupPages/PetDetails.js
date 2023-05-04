import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { setPetDetails } from "../../Redux/PetSignUpSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import InputComponent from "../InputComponent";
import { required } from "../../helper/formValidation";

export default function PetDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.PetSignUp.petdetail);
  const [isErrorLabel, setIsErrorLabel] = useState(false);
  const showlabelRed = (flag) => {
    setIsErrorLabel(flag);
  };

  const onSubmitHandler = (form) => {
    console.log("FORM VALUES", form);
    dispatch(setPetDetails(form));
    navigate("/vetDetails");
  };
  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        favroite: formValue.favroite,
        petdetails: formValue.petdetails,
        pethabits: formValue.pethabits,
      }}
      mutators={{
        setFavorites: (event, state, utils) => {
          utils.changeValue(state, "favroite", () => {
            if (event[0].target.checked) {
              return [
                "Giving kisses",
                "Walks",
                "Barking",
                "Snuggling",
                "Treats",
                "Playing fetch",
                "Naps",
                "Toys",
              ];
            } else {
              return [];
            }
          });
        },
      }}
      render={({ form, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className=" h-[100%]">
            <div className="p-[25px] w-full lg:w-[80%] xl:w-[70%] mx-auto">
              <div className=" mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-6xl xl:text-8xl leading-35 xl:leading-56 text-left">
                  Thanks! Now give us all the details about Ginger.
                </h4>
              </div>
              <div className="  mt-[30px] mb-[10px]">
                <p className="text-start text-grayish_blue text-3xl font-basic-sans">
                  Favourite things
                </p>
              </div>

              <div className=" grid grid-cols-3 gap-3 mx-auto">
                <div class="flex items-center font-basic-san">
                  <Field
                    name="select all"
                    value={""}
                    onClick={form.mutators.setFavorites}
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />

                  <label
                    for="select all checkbox"
                    className="ml-2 text-lg sm:text-2xl"
                  >
                    Select all
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Giving kisses"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Giving kisses"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Giving kisses
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Walks"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Walks"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Walks
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Barking"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Walks"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Barking
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Snuggling"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Walks"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Snuggling
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Treats"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Walks"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Treats
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Playing fetch"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Walks"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Playing fetch
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Naps"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Walks"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Naps
                  </label>
                </div>
                <div class="flex items-center">
                  <InputComponent
                    showlabelRed={showlabelRed}
                    name="favroite"
                    value="Toys"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                    validate={required}
                  />
                  <label
                    for="Walks"
                    class={
                      "ml-2 text-lg sm:text-2xl " +
                      (isErrorLabel ? "text-red-700" : "text-grayish_blue")
                    }
                  >
                    Toys
                  </label>
                </div>
              </div>
              <div className=" mx-auto mt-[30px] mb-[5px] text-left">
                <label>Pet details</label>
                <InputComponent
                  name="petdetails"
                  component="textarea"
                  placeholder="Pet's name"
                  rows="4"
                  type="textarea"
                  validate={required}
                />
              </div>
              <div className=" mx-auto mb-[5px] text-left">
                <label>Any pet habits</label>
                <InputComponent
                  name="pethabits"
                  component="textarea"
                  placeholder="Pet's name"
                  rows="4"
                  type="text"
                  validate={required}
                />
              </div>

              <div className=" mx-auto mb-[20px] ">
                <Link className="text-gray_blue underline" to="/skip">
                  Skip
                </Link>
              </div>
            </div>
            <Footer
              leftTitle={"Back"}
              rightTitle={"Next"}
              leftNavigation={"/petprofilesignup"}
              type="submit"
            />
          </div>
        </form>
      )}
    />
  );
}
