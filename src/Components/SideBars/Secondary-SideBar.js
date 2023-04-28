import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SecondarySideBar() {
  const navigate = useNavigate();
  return (
    <div class="bg-sidebar text-white relative ">
      <div class="p-[20px] sidebar_title border-b-2 border-gray-500  ">
        <h2 class=" leading-32 font-basic-sans text-sidebar_title text-4xl font-light ">
          My Account
        </h2>
      </div>
      <div class="pl-[50px] ">
        <div class=" p-[2px] text-left mt-[28px]  ">
          <h2 class="font-bold text-base leading-28 font-basic-sans text-sidebar_title">
            PROFILE
          </h2>
          <ul>
            <li>
              <Link
                to="#"
                className="font-normal text-3xl leading-28 font-basic-sans text-left hover:text-sidebar_subTitleHover"
                onClick={() => navigate("/homeaddress")}
              >
                Home address
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className=" font-normal text-3xl leading-28 font-basic-sans text-left hover:text-sidebar_subTitleHover"
              >
                Contact info
              </Link>
            </li>
          </ul>
        </div>
        <div class=" text-left p-[2px] mt-[30px]">
          <h2 class="font-bold text-base leading-28 font-basic-sans text-sidebar_title">
            PAYMENT INFO
          </h2>
          <ul>
            <li>
              <Link
                to="#"
                class="font-normal text-3xl leading-28 font-basic-sans text-left hover:text-sidebar_subTitleHover"
                onClick={() => navigate("/paymentmethod")}
              >
                Payment methods
              </Link>
            </li>
            <li>
              <Link
                to="#"
                class="font-normal text-3xl leading-28 font-basic-sans text-left hover:text-sidebar_subTitleHover"
              >
                Receipts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
