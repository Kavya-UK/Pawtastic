import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faMessage } from "@fortawesome/free-solid-svg-icons";
export default function ServiceQuote() {
  return (
    <div className=" bg-white_color border-b-2 ">
      <div className="p-[30px] text-left overflow-auto grid grid-cols-7">
        <div className="col-span-5">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div className="bg-shaded_pink inline-block rounded-full p-[20px] ">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-pinkish_beige text-5xl"
                />
              </div>
            </div>
            <div className="inline-block text-Favourite_greyish  col-span-2">
              <p>
                Please be sure to give her the antibiotics, they’re on the
                kitchen counter… Read more
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex items-center ml-[20px] ">
          <div className=" rounded bg-blue_grey_color inline-block py-[5px] px-[15px]">
            <FontAwesomeIcon
              icon={faMessage}
              className=" text-Pet_content w-[14px] h-[14px] "
            />
            <span className="px-[10px] text-basic-sans text-Pet_content">
              Chat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
