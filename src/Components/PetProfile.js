import React from "react";
import Ginger from "../images/ginger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faCheck } from "@fortawesome/free-solid-svg-icons";

const PetProfile = ({ petDetails, petDetaill,  }) => {
  function calculateAge(birthDate) {  
    const birthDateObj = new Date(birthDate);

    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    if (
      currentDate.getMonth() < birthDateObj.getMonth() ||
      (currentDate.getMonth() === birthDateObj.getMonth() &&
        currentDate.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  }
  return (
    <div class=" relative ">
      <div class="w-full h-[72px] bg-transparent relative">
        <img
          src={Ginger}
          alt="Avatar"
          class="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 h-auto w-[72px] rounded-full border-2 border-white"
        />
      </div>
      <div className="bg-white rounded-[10px] px-[30px] pb-[30px]">
        <div className="text-center pt-[50px]">
          <h6 className="text-Pet_content font-henriette text-6xl  leading-40 font-bold ">
            {petDetails.petname}
          </h6>
          <p className="text-Pet_type text-xl font-semibold leading-26 font-basic-sans">
            {petDetails.breed}
          </p>
        </div>
        <div className="text-center ">
          <p className="my-[20px] font-basic-sans text-Favourite_greyish text-base font-bold leading-28 tracking-1em">
            FAVOURITE THING
          </p>
          <div>
            {petDetaill?.favroite?.map((fav) => {
              return (
                <span
                  key={fav}
                  className="rounded-3xl inline-block bg-shaded_pink px-3 py-1 mr-3 text-Pet_type"
                >
                  {fav}
                </span>
              );
            })}
          </div>
          <div className="border border-blue_grey_color  text-center border-solid mt-[20px] grid grid-cols-4">
            <div className="border-r-1 flex flex-col ">
              <div className="">
                <FontAwesomeIcon
                  icon={faVenus}
                  className="w-[32px] bg-shaded_pink border-radius rounded-full text-pinkish_beige p-[6px] mt-[8px]"
                />
              </div>
              <div className=" text-Pet_type font-basic-sans text-base font-bold not-italic leading-28 text-center tracking-100">
                {petDetails.gender}
              </div>
            </div>
            <div className="border-r-1 flex flex-col  ">
              <div className="inline-block   text-4xl text-Pet_type font-weight-300 font-basic-sans text-center not-italic leading-8 mt-[6px] ">
                {isNaN(calculateAge(petDetails.birthday))
                  ? "0"
                  : calculateAge(petDetails.birthday)}
              </div>
              <div className=" text-Pet_type font-basic-sans text-base font-bold not-italic leading-28 text-center tracking-100 ">
                YEAR OLD
              </div>
            </div>
            <div className="border-r-1 inline-block ">
              <div className="h-1/2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="w-[32px] bg-shaded_pink border-radius rounded-full text-pinkish_beige p-[6px] mt-[8px]"
                />
              </div>
              <div className="h=1/2 text-Pet_type font-basic-sans text-base font-bold not-italic leading-28 text-center tracking-100">
                {petDetails.spayed === "Yes" ? "SPAYED" : "Neutured"}
              </div>
            </div>
            <div className="border-r-1 inline-block ">
              <div className="inline-block h-1/2 p-2 text-4xl text-Pet_type font-weight-300 font-basic-sans text-center not-italic leading-8">
                {petDetails.weight}
              </div>
              <div className="h=1/2 text-Pet_type font-basic-sans text-base font-bold not-italic leading-28 text-center tracking-100">
                POUNDS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
