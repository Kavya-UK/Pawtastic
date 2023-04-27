import React from "react";
import Smile from "../images/Smile.png"

export default function SitterEmptyState() {
  return (
    <div className="w-[578px] h-[144px] border-solid  border-[1px] border-shade_of_gray bg-white_color">
      <div className="p-[20px] text-left">
        <div className=" inline-block rounded-full relative top-[12px] w-[64px]">
          <img src={Smile} alt="Avatar" className="w-[33px]  bg-shaded_pink" />
        </div>
        <div className="inline-block ml-[15px] text-Favourite_greyish relative top-[12px] left-[10px] ">
          <p className="text-Favourite_greyish">
            Your sitter <br />
            <strong className="text-Pet_content">Not assigned yet</strong>
            <br />
            Sitters are assigned 72 hours before service
          </p>
        </div>
      </div>
    </div>
  );
}
