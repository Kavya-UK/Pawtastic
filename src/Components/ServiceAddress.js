import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPen } from "@fortawesome/free-solid-svg-icons";
import { MdLocationOn } from "react-icons/md";

export default function ServiceAddress({ selectedItem }) {
  return (
    <div className=" bg-white_color border-b-2 ">
      <div className="p-[30px] text-left overflow-auto grid grid-cols-7">
        <div className="col-span-5">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div className="bg-shaded_pink inline-block rounded-full p-[20px] ">
                <MdLocationOn className="text-pinkish_beige text-5xl" />
              </div>
            </div>
            <div className="inline-block text-Favourite_greyish  col-span-2">
              <p>123 Fluffypants Lane Pawtown, FL 32789 123-468-8901</p>
            </div>
          </div>
        </div>

        <div className="flex items-center col-span-2 ml-[20px]">
          <div className=" rounded bg-blue_grey_color inline-block py-[5px] px-[15px]">
            <FontAwesomeIcon
              icon={faPen}
              className=" text-Pet_content w-[14px] h-[14px] "
            />
            <span className="px-[10px] text-basic-sans text-Pet_content">
              Edit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
