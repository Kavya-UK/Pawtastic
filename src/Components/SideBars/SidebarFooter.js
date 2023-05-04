import React from "react";
import { Link } from "react-router-dom";
const SidebarFooter = () => {
  return (
    <div class=" pl-[40px] xl:pl-[50px] text-left pb-[20px] absolute inset-x-0 bottom-0 ">
      <ul>
        <li class="">
          <Link
            to="#"
            className="font-normal text-xl xl:text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
          >
            My account
          </Link>
        </li>
        <li class="">
          <Link
            to="#"
            class="font-normal text-xl xl:text-3xl leading-28 font-basic-sans  hover:text-sidebar_subTitleHover"
          >
            Support
          </Link>
        </li>
        <li class="">
          <Link
            to="#"
            class="font-normal text-xl xl:text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SidebarFooter;
