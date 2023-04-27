import React from "react";
// import { MdLocalFlorist } from "react-icons/md";
// import { FaRegSun } from "react-icons/fa";

export default function ServiceListItems({
  serviceDate,
  firstIcon,
  secondIcon,
  firstService,
  secondService,
  imageType,
  bgColor,
  isSelected,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={
        "hover:bg-shade_of_gray " + (isSelected ? "bg-white" : "bg-shaded_pink")
      }
    >
      <div class="grid grid-cols-12 gap-4 p-[20px]">
        <div class="col-span-8  text-left">
          <h4 className=" text-gray_blue font-basic-sans text-3xl font-light ">
            {serviceDate}
          </h4>
          <div className="pt-[10px] text-2xl font-basic-sans font-normal">
            {firstIcon}
            <span className="text-grayish_blue ml-[10px] text-xl">
              {firstService}
            </span>
          </div>
          <div className="pt-[10px] text-2xl font-basic-sans font-normal">
            {secondIcon}

            <span className="text-grayish_blue ml-[10px] text-xl">
              {secondService}
            </span>
          </div>
        </div>
        <div class="col-span-4 ">
          {imageType ? (
            <img src={imageType} alt="" className="w-[80px] " />
          ) : null}
        </div>
      </div>
    </div>
  );
}
