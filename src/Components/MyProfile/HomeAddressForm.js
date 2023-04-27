import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeAddressForm() {
  const navigate = useNavigate();
  return (
    <div className="bg-shaded_pink text-white h-[100%]">
      <div class="py-[20px] sidebar_title border-b-2 border-white grid grid-cols-12 text-left">
        <div className=" col-span-2 "> </div>
        <h2 class="col-span-8 leading-32 font-basic-sans text-sidebar_title text-4xl font-light ">
          Home address
        </h2>
      </div>
      <div className="grid grid-cols-12">
        <div className=" col-span-2 "> </div>
        <div className=" col-span-8 ">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="mb-[5px] mt-[20px] inline-block">
              <label
                className="block text-3xl font-normal text-gray-500"
                for="firstname"
              >
                First name
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="Meagan"
                id="firstname"
              />
            </div>
            <div className="mb-[5px] mt-[20px] inline-block ml-[0px]">
              <label
                className="block text-3xl font-normal text-gray-500"
                for="lastname"
              >
                Last name
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="Fisher"
                id=""
              />
            </div>
          </div>
          <div className="grid grid-col ">
            <div className="mb-[5px] mt-[20px] inline-block">
              <label
                className="block text-3xl font-normal text-gray-500"
                for="streetaddress"
              >
                Street address
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="123 Fluffypants Lane"
                id="streetaddress"
              />
            </div>
          </div>
          <div className="grid grid-cols-4  gap-4 mx-auto ">
            <div className="mb-[5px] mt-[20px] col-span-2 inline-block">
              <label
                className="block text-3xl font-normal text-gray-500"
                for="city"
              >
                City
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="City"
                id="city"
              />
            </div>
            <div className="mb-[5px] mt-[20px] inline-block">
              <label
                className="block text-3xl font-normal text-gray-500"
                for="state"
              >
                State
              </label>

              <select
                className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                id="state"
              >
                <option value="FL">FL</option>
                <option value="LA">LA</option>
                <option value="DA">DA</option>
              </select>
            </div>
            <div className="mb-[5px] mt-[20px] inline-block">
              <label
                className="block text-3xl font-normal text-gray-500"
                for="zip"
              >
                Zip
              </label>
              <input
                className="w-full px-4 py-3 mt-1 text-lg text-gray-700 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="text"
                placeholder="32789"
                id="zip"
              />
            </div>
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
