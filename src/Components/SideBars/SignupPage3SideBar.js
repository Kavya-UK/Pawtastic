import React from "react";
import SideBarImg from "../../images/Signup-3.png";
import Logomark from "../../images/Logomark.png";
import { Link } from "react-router-dom";

export default function SignupPage3SideBar({ pageTitle,pageimg}) {
  return (
    <div
      style={{ "--image-url": `url(${pageimg})` }}
      className="bg-[image:var(--image-url)] text-white h-[100%] pl-[30px] lg:pl-[70px] xl:pl-[100px] pt-[50px] relative bg-repeat-round"
    >
      <div class=" flex items-center">
        <img class="w-12 h-12 rounded-full mr-4" src={Logomark} alt="Avatar" />
        <div>
          <span className="font-basic-sans text-xl lg:text-4xl leading-28">
            PAWTASTIC
          </span>
        </div>
      </div>
      <div className="relative mt-[25px] xl:mt-[50px]">
        <div className="absolute h-[85%] border-l-[1px] border-grayish_blue top-[10px] left-[20px]"></div>
        <div className="text-left flex items-center mt-[20px] text-3xl xl:text-4xl">
          <span
            className={
              "inline-block w-[40px] h-[40px] rounded-[50%] relative " +
              (pageTitle === "humanProfile" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[24px] h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[6.25%] -translate-y-[6.25%]"></span>
          </span>
          <span className="inline-block pl-[20px] font-basic-sans text-grayish_blue text-3xl xl:text-4xl">
            Human profile
          </span>
        </div>
        <div className="text-left flex items-center mt-[20px]">
          <span
            className={
              "inline-block w-[40px] h-[40px] rounded-[50%] relative " +
              (pageTitle === "petBasic" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[24px] h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[6.25%] -translate-y-[6.25%]"></span>
          </span>
          <span className="inline-block pl-[20px] font-basic-sans text-grayish_blue text-3xl xl:text-4xl">
            Pet basics
          </span>
        </div>
        <div className="text-left flex items-center mt-[20px]">
          <span
            className={
              "inline-block w-[40px] h-[40px] rounded-[50%] relative " +
              (pageTitle === "petDetails" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[24px] h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[6.25%] -translate-y-[6.25%]"></span>
          </span>
          <span className="inline-block pl-[20px] font-basic-sans text-grayish_blue text-3xl xl:text-4xl">
            Pet details
          </span>
        </div>
        <div className="text-left flex items-center mt-[20px]">
          <span
            className={
              "inline-block w-[40px] h-[40px] rounded-[50%] relative " +
              (pageTitle === "confirm" ? "bg-white" : "")
            }
          >
            <span className="inline-block w-[24px] h-[24px] bg-grayish_blue rounded-[50%] absolute top-[25%] left-[25%] transform -translate-x-[6.25%] -translate-y-[6.25%]"></span>
          </span>
          <span className="inline-block pl-[20px] font-basic-sans text-grayish_blue text-3xl xl:text-4xl">
            Confirm
          </span>
        </div>
      </div>
      <div class="">
        <Link
          className=" absolute bottom-[20px] left-[15%] text-white_color font-basic-sans text-3xl xl:text-4xl"
          to="/save&exit"
          style={{ textDecoration: "underline" }}
        >
          Save and exit
        </Link>
      </div>
    </div>
  );
}
