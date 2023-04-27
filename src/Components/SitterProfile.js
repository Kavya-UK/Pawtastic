import React from "react";
import sitterprofile from "../images/sitterprofile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function SitterProfile() {
  return (
    <div className="border-b-2 bg-white_color">
      <div className="p-[30px] text-left overflow-auto grid grid-cols-7">
        <div className="col-span-5">
          <div className="grid grid-cols-3">
            <div className="inline-block col-span-1">
              <img src={sitterprofile} alt="" />
            </div>
            <div className="inline-block text-Favourite_greyish  col-span-2 ">
              <p className="text-Favourite_greyish">Your sitter</p>
              <p className="text-Pet_content">
                <strong>Andrew Couldwell</strong>
              </p>
              <p className="text-Favourite_greyish">4.8 rating</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center ml-[20px]">
          <div className=" rounded bg-blue_grey_color inline-block py-[5px] px-[15px] ">
            <FontAwesomeIcon
              icon={faStar}
              className=" text-Pet_content w-[14px] h-[14px] "
            />
            <span className="px-[10px] text-basic-sans text-Pet_content">
              Reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
