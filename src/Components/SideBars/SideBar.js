import React from "react";
import Logomark from "../../images/Logomark.png";
import { Link } from "react-router-dom";
import SidebarFooter from "./SidebarFooter";

export default function SideBar({ isSecondarySideBar }) {
  return (
    <div className="bg-sidebar text-white h-[100%] pl-[40px] xl:pl-[50px] pt-[50px] relative">
      <div className=" flex items-center">
        <img
          className="w-10 h-10 xl:w-12 xl:h-12 rounded-full mr-4"
          src={Logomark}
          alt="Avatar"
        />
      </div>
      <div className="pr-[20px] text-left mt-[28px]">
        <h2 className="font-bold text-base leading-28 font-basic-sans text-sidebar_title">
          SERVICES
        </h2>
        <ul>
          <li className="">
            <Link
              href="#"
              className="font-normal text-xl xl:text-3xl leading-28 font-basic-sans text-left hover:text-sidebar_subTitleHover"
            >
              Scheduled
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className=" font-normal text-xl xl:text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
            >
              Completed
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-[2px] text-left mt-[30px]">
        <h2 className="font-bold text-base leading-28 font-basic-sans text-sidebar_title">
          PETS
        </h2>
        <ul>
          <li className="">
            <Link
              href="#"
              className="font-normal text-xl xl:text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
            >
              Ginger
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className="font-normal text-xl xl:text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
            >
              Fluffy
            </Link>
          </li>
        </ul>
        <div className="">
          <button
            className={"mt-[30px] leading-26 font-basic-sans rounded-[5px] bg-white text-button_color " +(
              isSecondarySideBar
                ? "px-[5px] lg:px-[8px] xl:px-[12px] py-[8px] font-bold text-xl xl:text-2xl"
                : "px-[10px] lg:px-[15px] xl:px-[20px] py-[10px] font-bold text-xl xl:text-3xl"
            )}
          >
            Book a service
          </button>
        </div>
      </div>
      <SidebarFooter />
    </div>
  );
}
