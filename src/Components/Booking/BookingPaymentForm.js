import React from 'react';
import { useNavigate } from "react-router-dom";

export default function BookingPaymentForm() {
    const navigate=useNavigate();
  return (
    <div className="bg-shaded_pink text-white h-[100%]">
      <div className=" grid grid-cols-12 mx-auto ">
        <div className=" col-span-2 "> </div>
        <div className="  col-span-12 lg:col-span-8 ">
          <div className="grid grid-col gap-4 ">
            <div className=" mx-[10px] lg:mx-[0px] text-5xl lg:text-8xl pt-[30px]">
              <h4 className="text-gray_blue font-henriette font-bold leading-25 lg:leading-56 text-left ">
                Finally, how would you like <br />
                to pay for your dog walk?
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className=" col-span-2 "> </div>
        <div className=" col-span-12 lg:col-span-8 ">
          <div className="grid grid-col gap-4 ">
            <div className=" mx-[10px] lg:mx-[0px] mb-[5px] mt-[5px] inline-block">
              <label
                className="block text-xl lg:text-3xl font-normal text-grayish_blue"
                for="label"
              >
                Label
              </label>
              <input
                className="  w-full px-4 py-3 mt-1 text-lg text-pinkish_beige  bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="Placeholder text"
                id="label"
              />
            </div>
            <div className=" mx-[10px] lg:mx-[0px] mb-[5px] mt-[5px] inline-block ">
              <label
                className="block text-xl lg:text-3xl font-normal text-grayish_blue"
                for="label"
              >
                Label
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-pinkish_beige  bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="Placeholder text"
                id="label"
              />
            </div>
          </div>

          <div className="grid grid-cols-4  gap-4 mx-auto mb-[5px] mt-[15px] ">
            <div className="col-span-3 text-base lg:col-span-2 text-left">
              <div className=" inline-block mx-[10px] lg:mx-[0px]">
                <label
                  className="block text-xl lg:text-3xl font-normal text-grayish_blue"
                  for="edate"
                >
                  Expiration date
                </label>
                <select
                  className="w-full px-[4px] py-[8px] mt-1 text-lg text-pinkish_beige  bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  id="edate"
                >
                  <option value="01 Jan">01 Jan</option>
                  <option value="02 Jan">02 Jan</option>
                  <option value="03 Jan">03 Jan</option>
                </select>
              </div>
              <div className="ml-[20px] inline-block">
                <select
                  className="w-full px-[4px] py-[8px] mt-1 text-lg text-pinkish_beige  bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  id="year"
                >
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
            <div className=" inline-block mx-[10px] lg:mx-[0px]">
              <label
                className="block text-xl lg:text-3xl font-normal text-grayish_blue"
                for="cvc"
              >
                CVC
              </label>
              <input
                className="mr-[40px] w-[70%] px-[2px] py-[2px] text-lg text-pinkish_beige bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder=" 327"
                id="pin"
              />
            </div>
          </div>
          <div className="flex mb-4  mt-[15px] mx-[10px] lg:mx-[0px]">
            <input
              id="privacy-policy-checkbox"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label
              for="privacy-policy-checkbox"
              className="ml-2 block font-basic-sans text-xl lg:text-3xl text-grayish_blue"
            >
              Save this card for future use.
            </label>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[0px] w-[100%] md:w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
        <div>
          <button
            onClick={() => {
              navigate("/petinfo2");
            }}
            className="bg-white font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
