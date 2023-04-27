import React from 'react'
import { useNavigate } from "react-router-dom";
import {MdCancel} from "react-icons/md";
import { FaPlusCircle } from  "react-icons/fa";


const PaymentMethodForm=()=> {
    const navigate = useNavigate();
  return (
    <div className="bg-shaded_pink text-white h-[100%]">
      <div class="py-[20px] sidebar_title border-b-2 border-white grid grid-cols-12 text-left">
        <div className=" col-span-2 "> </div>
        <h2 class="col-span-8 leading-32 font-basic-sans text-sidebar_title text-4xl font-light ">
          Payment methods
        </h2>
      </div>
      <div className="grid grid-cols-12">
        <div className=" col-span-2 "> </div>
        <div className=" col-span-8 ">
          <div className="grid grid-col gap-4 ">
            <div className="mb-[5px] mt-[20px] inline-block">
              <label
                className="block text-3xl font-normal text-grayish_blue"
                for="firstname"
              >
                Credit card holder name
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-grayish_blue placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="Theo Fisher"
                id="firstname"
              />
            </div>
            <div className="mb-[5px] mt-[20px] inline-block ml-[0px]">
              <label
                className="block text-3xl font-normal text-grayish_blue"
                for="cardnumber"
              >
                Credit card number
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-grayish_blue placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="000-000-0000"
                id=""
              />
            </div>
          </div>

          <div className="grid grid-cols-4  gap-4 mx-auto mb-[5px] mt-[20px] ">
            <div className="col-span-2 text-left">
              <div className=" inline-block">
                <label
                  className="block text-3xl font-normal text-grayish_blue"
                  for="edate"
                >
                  Expiration date
                </label>
                <select
                  className="w-full px-4 py-3 mt-1 text-lg text-grayish_blue placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 mt-1 text-lg text-grayish_blue placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  id="year"
                >
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
            <div className=" inline-block">
              <label
                className="block text-3xl font-normal text-grayish_blue"
                for="cvc"
              >
                CVC
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-grayish_blue placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="327"
                id="pin"
              />
            </div>
          </div>
          <div className=" border-b-2  text-left mb-[5px] mt-[20px]">
            <span className="inline-block text-shade_of_red">
              <MdCancel className=" text-3xl inline-block" />
              Delete this card
            </span>
          </div>
          <div className="text-left">
            <span className="inline-block text-gray_blue mb-[5px] mt-[20px]">
              <FaPlusCircle className=" text-3xl inline-block" />
              Add new payment method
            </span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[0px] w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
        <div></div>
        <div>
          <button
            onClick={() => {
              navigate("/myprofile");
            }}
            className="bg-gray_blue px-[25px] ml-[20px] py-[8px] text-white inline-block rounded-[20px]"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
export default PaymentMethodForm;