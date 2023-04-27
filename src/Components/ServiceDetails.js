import React from "react";
import {
  MdLocalFlorist,
  MdRepeat,
  MdReceipt,
  MdFeedback,
} from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import ServiceQuoteWithImage from "./ServiceQuoteWithImage";
import map from "../images/map.png";
import SitterProfile from "./SitterProfile";

const ServiceDetails = ({ selectedItem }) => {
  return (
    <>
      <div className="p-[16px] border-b-2 grid grid-cols-7 ">
        <div className="text-left flex items-center ml-[6%] col-span-4 sm:col-span-6 md:col-span-5 xl:col-span-5">
          <h5 className="text-grayish_blue font-basic-sans leading-32 text-left text-4xl">
            {selectedItem.serviceDate}
            
          </h5>
        </div>

        <div className=" text-2xl font-basic-sans font-normal col-span-3 sm:col-span-1 md:col-span-2 xl:col-span-2">
          <div className=" text-2xl font-basic-sans font-normal">
            {selectedItem.firstIcon}
            
            <span className="text-grayish_blue ml-[10px] text-xl">
              {selectedItem.firstService}
              
            </span>
          </div>
          <div className=" text-2xl font-basic-sans font-normal">
            {selectedItem.secondIcon}
            
            <span className="text-grayish_blue ml-[10px] text-xl">
              {selectedItem.secondService}
              
            </span>
          </div>
        </div>
      </div>
      <ServiceQuoteWithImage selectedItem={selectedItem} />
      <div className="  border-b-2 ">
        <img
          src={map}
          alt=""
          className="pl-[50px] pr-[30px] pt-[60px] pb-[25px]"
        />
      </div>
      <SitterProfile />
      <div className="text-center">
        <div className=" rounded bg-blue_grey_color inline-block relative top-[20px] py-[10px] px-[10px]  ml-[10px] ">
          <span className="inline-block">
            <MdRepeat className=" text-Pet_content relative top-[7px] text-4xl" />
          </span>
          <span className="px-[10px] text-basic-sans text-Pet_content inline-block relative top">
            Repeat service
          </span>
        </div>
        <div className="rounded bg-blue_grey_color inline-block relative top-[20px] py-[10px] px-[10px]  mx-[20px] my-[30px]">
          <span className="inline-block">
            <MdReceipt className=" text-Pet_content text-4xl relative top-[7px]" />
          </span>
          <span className="px-[10px] text-basic-sans text-Pet_content inline-block ">
            View receipt
          </span>
        </div>
        <div className="rounded bg-blue_grey_color inline-block relative top-[20px] py-[10px] px-[10px]  ml-[18px]">
          <span className="inline-block">
            <MdFeedback className=" text-Pet_content text-4xl relative top-[7px]" />
          </span>
          <span className="px-[10px] text-basic-sans text-Pet_content inline-block ">
            Give feedback
          </span>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
