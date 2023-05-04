import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faMessage,faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import PetWithImage from "../images/PetWithImage.png";

export default function ServiceQuoteWithImage({ selectedItem }) {
  return (
    <div className=" bg-white_color border-b-2 ">
      <div className="p-[12px] text-left overflow-auto grid grid-cols-7">
        <div className="col-span-1 text-right">
          <div className="bg-shaded_pink inline-block rounded-full mr-[15px]">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-pinkish_beige p-[15px] text-5xl "
            />
          </div>
        </div>
        <div className="inline-block px-[50px] text-Favourite_greyish  col-span-4">
          <p>
            Please be sure to give her the antibiotics,they're on the kitchen
            counter...Read more
          </p>
          <div className=" rounded bg-blue_grey_color inline-block py-[5px] px-[15px] mt-[20px]">
            <FontAwesomeIcon
              icon={faMessage}
              className=" text-Pet_content w-[14px] h-[14px] "
            />
            <span className="px-[10px] text-basic-sans text-Pet_content">
              Chat
            </span>
          </div>
        </div>

        <div className="inline-block  relative  col-span-2">
          {selectedItem.imageType && (
            <>
              <img
                src={selectedItem.imageType}
                alt="Avatar"
                className="w-[128px] float-right"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlassPlus}
                className="absolute left-[85%] bottom-[5px] text-white_color"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
