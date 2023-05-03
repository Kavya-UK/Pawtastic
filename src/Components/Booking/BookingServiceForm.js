import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLocalFlorist, MdWavingHand, MdHome } from "react-icons/md";

export default function BookingServiceForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-shaded_pink h-[100%] ">
      <div className="w-full lg:w-[80%] xl:w-[70%] mx-auto ">
        <div className=" mx-auto pt-[30px] ">
          <h4 className="text-gray_blue font-henriette font-bold text-5xl lg:text-8xl leading-25 lg:leading-56 text-left ">
            We can’t wait to see your pet! How can we help?
          </h4>
        </div>
        <div className="p-[10px]  overflow-auto grid grid-cols-7 bg-pinkish_beige rounded mt-[30px]">
          <div className="bg-white rounded-full  col-span-1 m-[20%] h-[50%] flex items-center justify-center">
            <MdLocalFlorist className="text-pinkish_beige text-5xl" />
          </div>
          <div className=" border-r-2 col-span-4 text-left ">
            <div>
              <h5 className="text-2xl lg:text-4xl font-henriette font-bold">
                Dog walk
              </h5>
            </div>
            <div className="text-gray_blue font-basic-sans text-xl ">
              <p>
                We’ll take your pup for a walk and make sure he or she has fresh
                food and water.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <h4 className=" text-2xl lg:text-4xl font-henriette font-bold ">
                $15
              </h4>
              <p className="text-gray_blue font-basic-sans text-lg">per 30</p>
              <p className="text-gray_blue font-basic-sans text-lg">min walk</p>
            </div>
          </div>
        </div>
        <div className="p-[10px]  overflow-auto grid grid-cols-7 bg-white rounded mt-[30px]">
          <div className="bg-shaded_pink rounded-full  col-span-1 m-[20%] h-[50%] flex items-center justify-center">
            <MdWavingHand className="text-pinkish_beige text-5xl" />
          </div>
          <div className=" border-r-2 col-span-4 text-left">
            <div>
              <h5 className="text-2xl lg:text-4xl font-henriette font-bold">
                Drop-in visit
              </h5>
            </div>
            <div className="text-gray_blue font-basic-sans text-xl ">
              <p>
                We’ll stop by to snuggle, feed, and play with your pets in the
                comfort of home.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <h4 className="text-2xl lg:text-4xl font-henriette font-bold ">
                $15
              </h4>
              <p className="text-gray_blue font-basic-sans text-lg">per 30</p>
              <p className="text-gray_blue font-basic-sans text-lg">min walk</p>
            </div>
          </div>
        </div>

        <div className="p-[10px]  overflow-auto grid grid-cols-7 bg-white rounded mt-[30px]">
          <div className="bg-shaded_pink rounded-full  col-span-1 m-[20%] h-[50%] flex items-center justify-center">
            <MdHome className="text-pinkish_beige text-5xl" />
          </div>
          <div className=" border-r-2 col-span-4 text-left ">
            <div>
              <h5 className="text-2xl lg:text-4xl font-henriette font-bold">
                House sitting
              </h5>
            </div>
            <div className="text-gray_blue font-basic-sans text-xl ">
              <p>
                We’ll stay overnight with your pet to make sure he or she has
                round-the-clock love.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <h4 className="text-2xl lg:text-4xl font-henriette font-bold ">
                $15
              </h4>
              <p className="text-gray_blue font-basic-sans text-lg">per 30</p>
              <p className="text-gray_blue font-basic-sans text-lg">min walk</p>
            </div>
          </div>
        </div>
        <div className="text-3xl text-left font-light">
          <p className="text-grayish_blue font-basic-sans ">
            Want to learn more?{" "}
            <strong className="text-gray_blue">
              Read more about our services
            </strong>
          </p>
        </div>
      </div>
      <div className="fixed bottom-[0px] w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
        <div>
          <button
            onClick={() => {
              navigate("/petDetails");
            }}
            className="bg-white font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
          >
            Back
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
