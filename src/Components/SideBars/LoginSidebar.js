import React from 'react'
import Logomark from "../../images/Logomark.png";

export default function LoginSidebar({ bgSideBarImg, sidebarTitle, subTitle }) {
  return (
    <div
      style={{ "--image-url": `url(${bgSideBarImg})` }}
      className="bg-[image:var(--image-url)] text-white h-[100%] pl-[10px] lg:pl-[40px] xl:pl-[50px] pt-[50px] relative bg-repeat-round"
    >
      <div class=" flex items-center">
        <img
          class="w-8 h-8 xl:w-12 xl:h-12 rounded-full mr-2"
          src={Logomark}
          alt="Avatar"
        />
        <div className=" md:text-lg lg:text-2xl xl:text-4xl">
          <span className="font-basic-sans  leading-28">PAWTASTIC</span>
        </div>
      </div>
      <div class=" flex items-left mt-[15px] md:text-base lg:text-lg xl:text-4xl ">
        <h2 class="text-left font-henriette text-white_color font-bold">
          {sidebarTitle}
          {subTitle}
        </h2>
      </div>
      <div className="px-[15px]  text-left text-white_color text-lg lg:text-xl xl:text-2xl font-basic-sans font-light mt-[10px]">
        <ul className="list-disc ">
          <li>We're animal lovers backed by insurance and experience</li>
        </ul>

        <ul className="list-disc pt-[9px] ">
          <li>Powered by tech so you can book and pay from our app</li>
        </ul>

        <ul className="list-disc pt-[9px] ">
          <li>Updates and pics for every visit keep you in the loop</li>
        </ul>
      </div>
    </div>
  );
}
