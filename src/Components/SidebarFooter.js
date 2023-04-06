import React from 'react'

export default function SidebarFooter() {
  return (
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
  );
}
