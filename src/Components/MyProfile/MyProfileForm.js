import React, { useState } from "react";
import { FaListUl, FaCalendar } from "react-icons/fa";
import ServiceListItems from "../ServiceListItems";
import { MdLocalFlorist, MdWavingHand } from "react-icons/md";
import { FaRegSun, FaSun } from "react-icons/fa";
import Dogwalk from "../../images/Dogwalk.png";
import dog from "../../images/dog2.png";
import newdog from "../../images/dog3.png";
import ServiceDetails from "../ServiceDetails";
import ProfileServiceDetails from "./ProfileServicedetails";

export default function MyProfileForm() {
  const [scheduledItems, setScheduledItems] = useState([
    {
      id: 109,
      serviceDate: "Saturday February 20th",
      firstIcon: (
        <MdLocalFlorist className="text-pinkish_beige inline-block text-4xl" />
      ),
      secondIcon: (
        <FaRegSun className="text-pinkish_beige inline-block text-4xl" />
      ),
      firstService: "Dog Walk",
      secondService: "Morning",
      isSelected: false,
    },
    {
      id: 110,
      serviceDate: "Saturday February 21st",
      firstIcon: (
        <MdWavingHand className="text-pinkish_beige inline-block text-4xl" />
      ),
      secondIcon: (
        <FaSun className="text-pinkish_beige inline-block text-4xl" />
      ),
      firstService: "Dog Walk",
      secondService: "Morning",
      isSelected: false,
    },
  ]);

  const handleScheduled = (id) => {
    const selected = scheduledItems.filter((item) => item.id === id);
    const scheduledItemChange = scheduledItems.map((item) => {
      if (item.id === id) return { ...item, isSelected: true };
      else return { ...item, isSelected: false };
    });
    const completedItemNew = completedItems.map((item) => {
      return { ...item, isSelected: false };
    });
    setScheduledItems(scheduledItemChange);
    setCompletedItems(completedItemNew);
    setSelectedItem(selected[0]);
  };

  const [completedItems, setCompletedItems] = useState([
    {
      id: 111,
      serviceDate: "Friday February 19th",
      firstIcon: (
        <MdLocalFlorist className="text-pinkish_beige inline-block text-4xl" />
      ),
      secondIcon: (
        <FaRegSun className="text-pinkish_beige inline-block text-4xl" />
      ),
      firstService: "Dog Walk",
      secondService: "Morning",
      imageType: Dogwalk,
      isSelected: false,
    },
    {
      id: 112,
      serviceDate: "Thursday February 18th",
      firstIcon: (
        <MdWavingHand className="text-pinkish_beige inline-block text-4xl" />
      ),
      secondIcon: (
        <FaSun className="text-pinkish_beige inline-block text-4xl" />
      ),
      firstService: "Dog Walk",
      secondService: "Morning",
      imageType: dog,
      isSelected: false,
    },
    {
      id: 113,
      serviceDate: "Wednesday February 17th",
      firstIcon: (
        <MdLocalFlorist className="text-pinkish_beige inline-block text-4xl" />
      ),
      secondIcon: (
        <FaRegSun className="text-pinkish_beige inline-block text-4xl" />
      ),
      firstService: "Dog Walk",
      secondService: "Morning",
      imageType: newdog,
      isSelected: false,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState();
  const handleCompleted = (id) => {
    const selected = completedItems.filter((item) => item.id === id);
    const completedItemChange = completedItems.map((item) => {
      if (item.id === id) return { ...item, isSelected: true };
      else return { ...item, isSelected: false };
    });
    const scheduledItemNew = scheduledItems.map((item) => {
      return { ...item, isSelected: false };
    });
    setScheduledItems(scheduledItemNew);
    setCompletedItems(completedItemChange);
    setSelectedItem(selected[0]);
  };
  return (
    <div className="grid grid-cols-5">
      
        <div className={"md:col-span-2 col-span-5 bg-shaded_pink "}>
          <div className="p-[15px] border-b-2 grid grid-cols-3 ">
            <div className="text-left flex items-center  col-span-2">
              <h5 className="text-grayish_blue font-basic-sans leading-32 text-left text-4xl">
                My Services
              </h5>
            </div>
            <div className="bg-white grid grid-cols-2 p-[10px]">
              <span className="inline-block p-[5px] bg-shade_of_beige">
                <FaListUl className=" inline-block text-grayish_blue text-4xl " />
              </span>
              <span className="inline-block p-[5px] ml-[10px]">
                <FaCalendar className="text-4xl text-gray_blue" />
              </span>
            </div>
          </div>
          <div className="p-[15px] border-b-2">
            <div>
              <h5 className="text-grayish_blue font-basic-sans leading-28 text-left text-base font-bold">
                SCHEDULED SERVICES
              </h5>
            </div>
          </div>
          <div className="h-[80vh] overflow-auto">
            {scheduledItems.map((scheduled) => {
              return (
                <div key={scheduled.serviceDate} className="border-b-2">
                  <ServiceListItems
                    onClick={() => handleScheduled(scheduled.id)}
                    serviceDate={scheduled.serviceDate}
                    firstIcon={scheduled.firstIcon}
                    secondIcon={scheduled.secondIcon}
                    firstService={scheduled.firstService}
                    secondService={scheduled.secondService}
                    isSelected={scheduled.isSelected}
                  />
                </div>
              );
            })}

            <div className="p-[15px] border-b-2">
              <div>
                <h5 className="text-grayish_blue font-basic-sans leading-28 text-left text-base font-bold">
                  COMPLETED SERVICES
                </h5>
              </div>
            </div>
            {completedItems.map((completed) => {
              return (
                <div key={completed.serviceDate} className="border-b-2">
                  <ServiceListItems
                    onClick={() => handleCompleted(completed.id)}
                    serviceDate={completed.serviceDate}
                    firstIcon={completed.firstIcon}
                    secondIcon={completed.secondIcon}
                    firstService={completed.firstService}
                    secondService={completed.secondService}
                    imageType={completed.imageType}
                    isSelected={completed.isSelected}
                  />
                </div>
              );
            })}
          </div>
        </div>
      

      {selectedItem ? (
        <div className="md:col-span-3 col-span-5 bg-white_color text-left h-[100vh] overflow-auto">
          {/* <ServiceDetails
          selectedItem={selectedItem}
          
        /> */}
          <ProfileServiceDetails selectedItem={selectedItem} />
        </div>
      ) : null}
    </div>
  );
}
