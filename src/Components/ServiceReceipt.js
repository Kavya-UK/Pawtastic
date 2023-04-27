import React from 'react'
import gingerdog from "../images/gingerdog.png"

export default function ServiceReceipt() {
  return (
    <div className="">
      <div className="grid grid-cols-2 border-[1px] border-shade_of_gray text-Pet_content text-4xl p-[10px]">
        <div className="ml-[25px]">
          <h4 className="my-[15px] font-bold text-3xl">Dog Walk for Ginger</h4>
        </div>
        <div className="">
          <img src={gingerdog} alt="Avatar" className="float-right" />
        </div>
      </div>
      <div className="bg-shade_of_gray text-left py-[20px] px-[50px]">
        <div className="  grid grid-cols-4 border-b-2 pb-[5px]">
          <span className="text-Favourite_greyish font-basic-sans text-base leading-28 font-bold tracking-wider  ">
            SERVICE TYPE
          </span>
          <div className="col-span-2 xl:col-span-1">
            <span className="bg-white_color  text-grayish_blue px-[15px] py-[8px] rounded-[20px] font-semibold text-[14px]">
              Dog walk
            </span>
          </div>
          <span className="hidden xl:inline-block"></span>
          <span className="text-3xl font-basic-sans leading-32 text-Pet_type text-right mr-[20px]">
            $15/walk
          </span>
        </div>
      </div>
      <div className="bg-shade_of_gray text-left py-[20px] px-[50px]">
        <div className="grid grid-cols-4 border-b-2 pb-[5px]">
          <span className="text-Favourite_greyish font-basic-sans text-base leading-28 font-bold tracking-wider  ">
            SERVICE TIME
          </span>
          <div className="col-span-2">
            <div className="lg:inline-block">
              <span className="bg-white_color text-grayish_blue px-[15px] py-[8px] rounded-[20px] font-semibold text-[14px]">
                Mornings
              </span>
            </div>
            <div className="mt-[15px] lg:mt-0 lg:inline-block lg:ml-[5px]">
              <span className="bg-white_color text-grayish_blue px-[15px] py-[8px] rounded-[20px] font-semibold text-[14px]">
                Evenings
              </span>
            </div>
          </div>

          <span className="text-3xl font-basic-sans leading-32 text-Pet_type text-right mr-[20px]">
            x 2
          </span>
        </div>
      </div>
      <div className="bg-shade_of_gray text-left py-[20px] px-[50px]">
        <div className="grid grid-cols-4 border-b-2 pb-[5px]">
          <span className="text-Favourite_greyish font-basic-sans text-base leading-28 font-bold tracking-wider  ">
            RECURRING
          </span>
          <div className="col-span-2">
            <span className="bg-white_color text-grayish_blue px-[15px] py-[8px] rounded-[20px] ml-[5px] font-semibold text-[14px]">
              M
            </span>

            <span className="bg-white_color text-grayish_blue px-[15px] py-[8px] ml-[5px] rounded-[20px] font-semibold text-[14px]">
              T
            </span>

            <span className="bg-white_color text-grayish_blue px-[15px] py-[8px] rounded-[20px] ml-[5px] font-semibold text-[14px]">
              Th
            </span>

            <span className="bg-white_color text-grayish_blue px-[15px] py-[8px] rounded-[20px] ml-[5px] font-semibold text-[14px]">
              F
            </span>
          </div>

          <span className="text-3xl font-basic-sans leading-32 text-Pet_type text-right mr-[20px]">
            x 5
          </span>
        </div>
      </div>
      <div className="bg-shade_of_gray text-left py-[20px] px-[50px] border-b-2">
        <div className="grid grid-cols-2 ">
          <span className="text-Favourite_greyish font-basic-sans text-base leading-28 font-bold tracking-wider  ">
            PAYMENT TYPE
          </span>
          <select className="text-gray_blue">
            <option>Master Card Ending 2431</option>
            <option>Master Card Ending 2432</option>
            <option>Master Card Ending 2433</option>
          </select>
        </div>
      </div>
      <div className="py-[30px] px-[20px] grid grid-cols-3 border-[1px] ml-[25px]">
        <h4 className="text-gray_blue font-henriette font-bold text-3xl">
          Total $150/Week{" "}
        </h4>
        <span></span>
        <p className="text-grayish_blue font-basic-sans">
          Billed weekly on sunday
        </p>
      </div>
    </div>
  );
}
