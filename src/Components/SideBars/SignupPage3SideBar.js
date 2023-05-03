import React from "react";
import SideBarImg from "../../images/Signup-3.png";
import Logomark from "../../images/Logomark.png";
import { Link } from "react-router-dom";

export default function SignupPage3SideBar({ pageTitle,pageimg}) {
  return (
    <div
      style={{ "--image-url": `url(${pageimg})` }}
      className="bg-[image:var(--image-url)] text-white h-[100%] pl-[10px] lg:pl-[40px] xl:pl-[50px] pt-[50px] relative bg-repeat-round"
    >
      <div class=" flex items-center">
        <img class="w-10 h-10 xl:w-12 xl:h-12 rounded-full mr-4" src={Logomark} alt="Avatar" />
        <div>
          <span className="font-basic-sans md:text-lg lg:text-2xl xl:text-4xl leading-28">
            PAWTASTIC
          </span>
        </div>
      </div>
      <div className="relative mt-[25px] xl:mt-[50px] md:text-lg lg:text-xl xl:text-4xl">
        <div className="absolute h-[85%] border-l-[1px] border-grayish_blue top-[10px] left-[15px] xl:left-[20px]"></div>
        <div className="text-left flex items-center mt-[20px] ">
          <span
            className={
              "inline-block w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] rounded-[50%] relative " +
              (pageTitle === "humanProfile" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[1%] xl:-translate-x-[6.25%] -translate-y-[3.25%] xl:-translate-y-[9.25%]"></span>
          </span>
          <span className="inline-block pl-[10px] lg:pl-[15px] xl:pl-[20px] font-basic-sans text-grayish_blue ">
            Human profile
          </span>
        </div>
        <div className="text-left flex items-center mt-[20px]">
          <span
            className={
              "inline-block w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] rounded-[50%] relative " +
              (pageTitle === "petBasic" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[1%] xl:-translate-x-[6.25%] -translate-y-[3.25%] xl:-translate-y-[9.25%]"></span>
          </span>
          <span className="inline-block pl-[10px] lg:pl-[15px] xl:pl-[20px] font-basic-sans text-grayish_blue ">
            Pet basics
          </span>
        </div>
        <div className="text-left flex items-center mt-[20px]">
          <span
            className={
              "inline-block w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] rounded-[50%] relative " +
              (pageTitle === "petDetails" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[1%] xl:-translate-x-[6.25%] -translate-y-[3.25%] xl:-translate-y-[9.25%]"></span>
          </span>
          <span className="inline-block pl-[10px] lg:pl-[15px] xl:pl-[20px] font-basic-sans text-grayish_blue ">
            Pet details
          </span>
        </div>
        <div className="text-left flex items-center mt-[20px]">
          <span
            className={
              "inline-block w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] rounded-[50%] relative " +
              (pageTitle === "confirm" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[1%] xl:-translate-x-[6.25%] -translate-y-[3.25%] xl:-translate-y-[9.25%]"></span>
          </span>
          <span className="inline-block pl-[10px] lg:pl-[15px] xl:pl-[20px] font-basic-sans text-grayish_blue ">
            Confirm
          </span>
        </div>
      </div>
      <div class="">
        <Link
          className=" absolute bottom-[20px] left-[15%] text-white_color font-basic-sans "
          to="/save&exit"
          style={{ textDecoration: "underline" }}
        >
          Save and exit
        </Link>
      </div>
    </div>
  );
}
