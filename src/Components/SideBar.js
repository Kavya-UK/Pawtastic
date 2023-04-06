import React from "react";
import Logomark from "../images/Logomark.png";
export default function SideBar() {
  return (
    <div class="flex h-screen">
      <div class="bg-sidebar text-white  md:w-1/4 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-10 relative">
        <div class="p-4 flex items-center">
          <img
            class="w-12 h-12 rounded-full mr-4"
            src={Logomark}
            alt="Avatar"
          />
          <div></div>
        </div>
        <div class="p-4 text-left">
          <h2 class="font-bold text-base leading-28 font-basic-sans   text-sidebar_title">
            SERVICES
          </h2>
          <ul>
            <li class="py-2">
              <a
                href="#"
                class="font-bold text-base leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
              >
                Scheduled
              </a>
            </li>
            <li class="py-2">
              <a
                href="#"
                class=" font-bold text-base leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
              >
                Completed
              </a>
            </li>
          </ul>
        </div>
        <div class="p-4 text-left">
          <h2 class="font-bold text-base leading-28 font-basic-sans  text-left text-sidebar_title">
            PETS
          </h2>
          <ul>
            <li class="py-2">
              <a
                href="#"
                class="font-bold text-base leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
              >
                Ginger
              </a>
            </li>
            <li class="py-2">
              <a
                href="#"
                class="font-bold text-base leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
              >
                Fluffy
              </a>
            </li>
          </ul>
          <button class="mt-10 p-2 font-bold text-base leading-28 font-basic-sans  w-full rounded-lg bg-white text-button_color">
            Book a service
          </button>
        </div>
        <div class="px-14 pb-8 absolute inset-x-0 bottom-0  text-left">
          <ul>
            <li class="py-2">
              <a
                href="#"
                class="font-bold text-base leading-28 font-basic-sans  hover:text-sidebar_subTitleHover"
              >
                My account
              </a>
            </li>
            <li class="py-2">
              <a
                href="#"
                class="font-bold text-base leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
              >
                Support
              </a>
            </li>
            <li class="py-2">
              <a
                href="#"
                class="font-bold text-base leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
