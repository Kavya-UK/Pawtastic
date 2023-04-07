import React from "react";
import Ginger from "../images/ginger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faCheck } from "@fortawesome/free-solid-svg-icons";

const PetProfile = () => {
  return (
    <div class="w-[600px] h-[400px]  relative border-solid border-[1px] border-border_greyish">
      <div class="w-full h-[72px] bg-white relative">
        <img
          src={Ginger}
          alt="Avatar"
          class="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 h-auto w-[72px] rounded-full border-2 border-white"
        />
      </div>
      <div className="text-center mt-7">
        <h6 className="text-Pet_content font-henriette text-6xl  leading-40 font-bold ">
          Ginger
        </h6>
        <p className="text-Pet_type text-xl font-semibold leading-26 font-basic-sans">
          Golden Retriever
        </p>
      </div>
      <div className="text-center mt-5">
        <p className="font-basic-sans text-Favourite_greyish text-base font-bold leading-28 tracking-1em">
          FAVOURITE THING
        </p>
        <div>
          <span className="rounded-3xl inline-block bg-shaded_pink px-3 py-1 mr-3 text-Pet_type">
            Barking
          </span>
          <span className="rounded-3xl inline-block bg-shaded_pink px-3 py-1 mr-3 text-Pet_type">
            Snuggling
          </span>
          <span className="rounded-3xl inline-block bg-shaded_pink px-3 py-1 mr-3 text-Pet_type">
            Giving kisses
          </span>
          <span className="rounded-3xl inline-block bg-shaded_pink px-3 py-1 mr-3 text-Pet_type">
            Walks
          </span>
          <span className="rounded-3xl inline-block bg-shaded_pink  px-3 py-1 mr-3 text-Pet_type">
            Treats
          </span>
        </div>
        <div className="border border-blue_grey_color m-[32px] text-center border-solid">
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="h=1/2">
              <FontAwesomeIcon
                icon={faVenus}
                className="w-[32px] bg-shaded_pink border-radius rounded-full text-pinkish_beige p-2"
              />
            </div>
            <div className="h=1/2">FEMALE</div>
          </div>
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="inline-block h-1/2  text-pinkish_beige p-2">8</div>
            <div className="h=1/2">YEARS OLD</div>
          </div>
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="h-1/2">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[32px] bg-shaded_pink border-radius rounded-full text-pinkish_beige p-2"
              />
            </div>
            <div className="h=1/2">SPAYED</div>
          </div>
          <div className="border-r-1 inline-block w-1/4 h-[60px]">
            <div className="inline-block h-1/2  text-pinkish_beige p-2">
              50-100
            </div>
            <div className="h=1/2">POUNDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
