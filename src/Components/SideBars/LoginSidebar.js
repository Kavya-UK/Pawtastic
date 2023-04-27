import React from 'react'
import Logomark from "../../images/Logomark.png";

export default function LoginSidebar({ bgSideBarImg, sidebarTitle, subTitle }) {
  return (
    <div
      style={{ "--image-url": `url(${bgSideBarImg})` }}
      className="bg-[image:var(--image-url)] text-white h-[100%] pl-[50px] lg:pl-[100px] pt-[50px] relative bg-repeat-round"
    >
      <div class="lg:p-4 flex items-center">
        <img class="w-12 h-12 rounded-full mr-4" src={Logomark} alt="Avatar" />
        <div>
          <span className="font-basic-sans  text-xl lg:text-4xl leading-28">
            PAWTASTIC
          </span>
        </div>
      </div>
      <div class=" flex items-left mt-[15px] ">
        <h2 class="text-left font-henriette text-3xl lg:text-4xl text- white_color font-bold">
          {sidebarTitle}
          {subTitle}
        </h2>
      </div>
      <div className="lg:p-[4px] text-left text-white_color text-[19px] font-basic-sans font-light mt-[10px]">
        <ul className="list-disc">
          <li>
            We're animal lovers backed by
            <br />
            insurance and experience
          </li>
        </ul>

        <ul className="list-disc pt-[9px]">
          <li>
            Powered by tech so you can
            <br />
            book and pay from our app
          </li>
        </ul>

        <ul className="list-disc pt-[9px]">
          <li>
            Updates and pics for every
            <br />
            visit keep you in the loop
          </li>
        </ul>
      </div>
    </div>
  );
}
