import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PetInfoForm() {
  const navigate = useNavigate();

  const [frequency, setFrequency] = useState("");
  const [days, setDays] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="bg-shaded_pink h-[100%]">
      <div className="p-[25px] ">
        <div className="lg:w-[60%] mx-auto">
          <h4 className="text-gray_blue font-henriette font-bold text-5xl lg:text-8xl leading-25 lg:leading-56 text-left">
            Okay, we’ll take Ginger for a
             walk. Just tell us when!
          </h4>
        </div>

        <div className="lg:w-[60%] grid grid-cols-2 gap-4 mx-auto mt-[10px]">
          <div className="mb-[5px] mt-[10px] inline-block col-span-2 lg:col-span-1">
            <label
              className="block text-3xl font-basic-sans text-grayish_blue mb-[4px]"
              for="Frequency"
            >
              Frequency
            </label>
            <div className="bg-white p-[5px] grid grid-cols-2 gap-4 py-[10px] text-gray_blue font-basic-sans text-3xl">
              <button
                className={
                  "px-[20px]  " +
                  (frequency === "Recurring" ? "bg-pinkish_beige" : "")
                }
                onClick={() => setFrequency("Recurring")}
              >
                Recurring
              </button>
              <button
                className={
                  "px-[20px] " +
                  (frequency === "One Time" ? "bg-pinkish_beige" : "")
                }
                onClick={() => setFrequency("One Time")}
              >
                One Time
              </button>
            </div>
          </div>
          <div className="mb-[5px] mt-[10px] inline-block col-span-2 lg:col-span-1">
            <label
              className="block text-3xl font-basic-sans text-grayish_blue"
              for="text"
            >
              Start Date
            </label>
            <input
              className="w-full px-2 py-2 mt-1 text-lg text-grayish_blue placeholder-gray-400 bg-white "
              type="text"
              placeholder="MM/DD/YYYY"
              id="sdate"
            />
          </div>
        </div>
        <div className="lg:w-[60%]  mx-auto">
          <div className="mb-[5px] mt-[10px] ">
            <label
              className="block text-3xl font-basic-sans text-grayish_blue"
              for="days"
            >
              Days Select all that apply
            </label>
            <div className="bg-white py-[2%] px-[2%] grid grid-cols-7 xl:gap-4  text-gray_blue font-basic-sans text-3xl">
              <button
                className={" " + (days === "Mon" ? "bg-pinkish_beige" : "")}
                onClick={() => setDays("Mon")}
              >
                Mon
              </button>
              <button
                className={" " + (days === "Tue" ? "bg-pinkish_beige" : "")}
                onClick={() => setDays("Tue")}
              >
                Tue
              </button>
              <button
                className={" " + (days === "Wed" ? "bg-pinkish_beige" : "")}
                onClick={() => setDays("Wed")}
              >
                Wed
              </button>
              <button
                className={" " + (days === "Thur" ? "bg-pinkish_beige" : "")}
                onClick={() => setDays("Thur")}
              >
                Thur
              </button>
              <button
                className={" " + (days === "Fri" ? "bg-pinkish_beige" : "")}
                onClick={() => setDays("Fri")}
              >
                Fri
              </button>
              <button
                className={" " + (days === "Sat" ? "bg-pinkish_beige" : "")}
                onClick={() => setDays("Sat")}
              >
                Sat
              </button>
              <button
                className={" " + (days === "Sun" ? "bg-pinkish_beige" : "")}
                onClick={() => setDays("Sun")}
              >
                Sun
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%]  mx-auto">
          <div className="mb-[5px] mt-[10px] ">
            <label
              className="block text-3xl font-basic-sans text-grayish_blue"
              for="times"
            >
              Times Select all that apply
            </label>
            <div className="bg-white py-[2%] px-[2%] grid grid-cols-3 xl:gap-4  text-gray_blue font-basic-sans text-3xl">
              <button
                className={" " + (time === "Morning" ? "bg-pinkish_beige" : "")}
                onClick={() => setTime("Morning")}
              >
                Morning
              </button>
              <button
                className={
                  " " + (time === "Afternoon" ? "bg-pinkish_beige" : "")
                }
                onClick={() => setTime("Afternoon")}
              >
                Afternoon
              </button>
              <button
                className={" " + (time === "Evening" ? "bg-pinkish_beige" : "")}
                onClick={() => setTime("Evening")}
              >
                Evening
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] mx-auto mt-[30px] mb-[5px] text-left text-3xl">
          <label className="block text-3xl font-basic-sans text-grayish_blue">
            Notes for your sitter
          </label>
          <textarea rows={3} className="w-[100%]"></textarea>
        </div>
      </div>
      <div className="fixed bottom-[0px] w-2/3 py-[20px] bg-white_color grid grid-cols-2 ">
        <div>
          <button
            onClick={() => {
              navigate("/bookingservice");
            }}
            className="bg-white font-light font-basic-sans text-2xl px-[40px] ml-[20px] py-[8px] text-gray_blue border border-gray_blue inline-block rounded-[20px]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
