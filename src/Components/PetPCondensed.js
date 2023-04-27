import React from "react";
import Ginger from "../images/ginger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck, faVenus } from "@fortawesome/free-solid-svg-icons";

export default function PetPCondensed() {
  return (
    <div className=" border-shade_of_gray bg-white_color text-left">
      <div className="p-[30px] ">
        <div className=" text-left overflow-auto grid grid-cols-7">
          <div className="col-span-5">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img src={Ginger} alt="" />
              </div>
              <div className="inline-block   col-span-2">
                <p className="text-Favourite_greyish text-3xl">Service for</p>
                <h4 className="text-gray_blue font-bold	text-3xl">
                  Ginger Fisher
                </h4>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex items-center ml-[20px] ">
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

        <div className="border border-blue_grey_color m-[32px] text-center border-solid">
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="h=1/2">
              <FontAwesomeIcon
                icon={faVenus}
                className="w-[32px] bg-shaded_pink border-radius rounded-full text-pinkish_beige p-2 mt-3"
              />
            </div>
            <div className="h=1/2 text-Pet_type font-basic-sans text-base font-bold not-italic leading-28 text-center tracking-100">
              FEMALE
            </div>
          </div>
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="inline-block h-1/2 p-2 text-4xl text-Pet_type font-weight-300 font-basic-sans text-center not-italic leading-8">
              8
            </div>
            <div className="h=1/2 text-Pet_type font-basic-sans text-base font-bold  leading-28 text-center tracking-100">
              YEARS OLD
            </div>
          </div>
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="h-1/2">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[32px] bg-shaded_pink border-radius rounded-full text-pinkish_beige p-2"
              />
            </div>
            <div className="h=1/2 text-Pet_type font-basic-sans text-base font-bold  leading-28 text-center tracking-100">
              SPAYED
            </div>
          </div>
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="inline-block h-1/2 p-2 text-4xl text-Pet_type font-weight-300 font-basic-sans text-center  leading-8">
              50-100
            </div>
            <div className="h=1/2 text-Pet_type font-basic-sans text-base font-bold  leading-28 text-center tracking-100">
              POUNDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
