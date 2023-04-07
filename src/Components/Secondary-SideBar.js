import React from 'react'

export default function SecondarySideBar() {
  return (
    <div class="flex h-screen  ">
      <div class="bg-sidebar text-white md:w-1/4 lg:w-1/4 xl:w-1/5 2xl:w-1/5 relative ">
        <div class="pl-10 pt-4 flex items-center sidebar_title border-b border-gray-500 pb-2 w-full text-left ">
          <h2 class=" leading-28 font-sans text-sidebar_title text-lg font-light mb-2">
            My Account
          </h2>
          {/* <div></div> */}
        </div>
        <div class="p-10">
          <div class=" text-left mb-2">
            <h2 class="font-bold text-xs leading-28 font-sans text-sidebar_title">
              PROFILE
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  class="font-normal text-xl leading-28 font-sans text-left hover:text-sidebar_subTitleHover"
                >
                  Home address
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class=" font-normal text-xl leading-28 font-sans text-left hover:text-sidebar_subTitleHover"
                >
                  Contact info
                </a>
              </li>
            </ul>
          </div>
          <div class=" text-left mb-2">
            <h2 class="font-bold text-xs leading-28 font-sans  text-left text-sidebar_title ">
              PAYMENT INFO
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  class="font-normal text-xl leading-28 font-sans text-left hover:text-sidebar_subTitleHover"
                >
                  Payment methods
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-normal text-xl leading-28 font-sans text-left hover:text-sidebar_subTitleHover"
                >
                  Receipts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
