import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Footer({
  leftTitle,
  rightTitle,
  leftNavigation,
  type,
  onClick,
}) {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-[0px] w-full md:w-4/5 py-[15px] xl:py-[20px] bg-white_color grid grid-cols-2 ">
      <div>
        <button
          onClick={() => {
            navigate(leftNavigation);
          }}
          className="bg-white font-light font-basic-sans text-lg xl:text-2xl ml-[20px] px-[30px] xl:px-[50px] py-[6px] xl:py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
        >
          {leftTitle}
        </button>
      </div>
      <div>
        <button
          type={type}
          onClick={onClick}
          className="bg-gray_blue font-light font-basic-sans ml-[20px] px-[30px] xl:px-[50px] py-[6px] xl:py-[8px] text-white text-lg xl:text-2xl inline-block rounded-[20px]"
        >
          {rightTitle}
        </button>
      </div>
    </div>
  );
}
