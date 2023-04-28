import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { setPetDetails } from "../../Redux/PetSignUpSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PetDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.PetSignUp.petdetail);

  const onSubmitHandler = (form) => {
    console.log("FORM VALUES", form);
    dispatch(setPetDetails(form));
    navigate("/vetDetails");
  };
  return (
    <Form
      onSubmit={onSubmitHandler}
      initialValues={{
        "favroite": formValue.favroite,
        "petdetails": formValue.petdetails,
        "pethabits": formValue.pethabits,
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
          <div className="bg-shaded_pink h-[100%]">
            <div className="p-[25px] ">
              <div className="w-[60%] mx-auto">
                <h4 className="text-gray_blue font-henriette font-bold text-[45px] leading-56 text-left">
                  Thanks! Now give us all the
                  <br />
                  details about Ginger.
                </h4>
              </div>
              <div className="w-[60%] mx-auto mt-[30px] mb-[10px]">
                <p className="text-start text-grayish_blue text-3xl font-basic-sans">
                  Favourite things
                </p>
              </div>

              <div className="w-[60%] grid grid-cols-3 gap-3 mx-auto">
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

                  <label for="select all checkbox" className="ml-2 text-xl">
                    Select all
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Giving kisses"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Giving kisses" class="ml-2 text-xl">
                    Giving kisses
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Walks"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Walks" class="ml-2 text-xl">
                    Walks
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Barking"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Walks" class="ml-2 text-xl">
                    Barking
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Snuggling"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Walks" class="ml-2 text-xl">
                    Snuggling
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Treats"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Walks" class="ml-2 text-xl">
                    Treats
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Playing fetch"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Walks" class="ml-2 text-xl">
                    Playing fetch
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Naps"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Walks" class="ml-2 text-xl">
                    Naps
                  </label>
                </div>
                <div class="flex items-center">
                  <Field
                    name="favroite"
                    value="Toys"
                    component="input"
                    placeholder=""
                    className="w-4 h-4 bg-white"
                    type="checkbox"
                  />
                  <label for="Walks" class="ml-2 text-xl">
                    Toys
                  </label>
                </div>
              </div>
              <div className="w-[60%] mx-auto mt-[30px] mb-[5px] text-left">
                <label>Pet details</label>
                <Field
                  name="petdetails"
                  component="input"
                  placeholder=""
                  className="rows={4} w-[100%] bg-white"
                  type="textarea"
                />
              </div>
              <div className="w-[60%] mx-auto mt-[30px] mb-[5px] text-left">
                <label>Any pet habits</label>
                <Field
                  name="pethabits"
                  component="input"
                  placeholder=""
                  className="rows={4} w-[100%] bg-white"
                  type="textarea"
                />
              </div>

              <div className="w-[60%] mx-auto mb-[20px] ">
                <Link className="text-gray_blue underline" to="/skip">
                  Skip
                </Link>
              </div>
            </div>
            <div className="fixed bottom-[0px] w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
              <div>
                <button
                  onClick={() => {
                    navigate("/petprofilesignup");
                  }}
                  className="bg-white font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  type="submit"
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
