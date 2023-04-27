import React from "react";
import { Link } from "react-router-dom";
const SidebarFooter = () => {
  return (
    <div class="px-14 pb-8 absolute inset-x-0 bottom-0  text-left">
      <ul>
        <li class="">
          <Link
            to="#"
            className="font-normal text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
          >
            My account
          </Link>
        </li>
        <li class="">
          <Link
            to="#"
            class="font-normal text-3xl leading-28 font-basic-sans  hover:text-sidebar_subTitleHover"
          >
            Support
          </Link>
        </li>
        <li class="">
          <Link
            to="#"
            class="font-normal text-3xl leading-28 font-basic-sans  text-left hover:text-sidebar_subTitleHover"
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SidebarFooter;
