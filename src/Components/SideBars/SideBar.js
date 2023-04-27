import React from "react";
import Logomark from "../../images/Logomark.png";
import { Link } from "react-router-dom";
import SidebarFooter from "./SidebarFooter";

export default function SideBar() {
  return (
    <div class="bg-sidebar text-white h-[100%] pl-[50px] relative">
      <div class="p-[16px] flex items-center">
        <img
          class="w-[40px] h-[40px] rounded-full mr-4"
          src={Logomark}
          alt="Avatar"
        />
        <div></div>
      </div>
      <div class="p-[2px] text-left mt-[28px]">
        <h2 class="font-bold text-base leading-28 font-basic-sans text-sidebar_title">
          SERVICES
        </h2>
        <ul>
          <li class="">
            <Link
              href="#"
              class="font-normal text-3xl leading-28 font-basic-sans text-left hover:text-sidebar_subTitleHover"
            >
              Scheduled
            </Link>
          </li>
          <li class="">
            <Link
              href="#"
              class=" font-normal text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
            >
              Completed
            </Link>
          </li>
        </ul>
      </div>
      <div class="p-[2px] text-left mt-[30px]">
        <h2 class="font-bold text-base leading-28 font-basic-sans text-sidebar_title">
          PETS
        </h2>
        <ul>
          <li class="">
            <Link
              href="#"
              class="font-normal text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
            >
              Ginger
            </Link>
          </li>
          <li class="">
            <Link
              href="#"
              class="font-normal text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
            >
              Fluffy
            </Link>
          </li>
        </ul>
        <button class="mt-[30px] px-[20px] py-[10px] font-bold text-3xl leading-26 font-basic-sans rounded-[5px] bg-white text-button_color">
          Book a service
        </button>
      </div>
      <SidebarFooter />
    </div>
  );
}
