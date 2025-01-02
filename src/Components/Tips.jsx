import React from "react";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";
import home6 from "../assets/home6.png";

const Tips = () => {
  return (
    <>
      <div className="tips">
        <h1 className="text-center text-3xl font-bold text-black bg-green-400 py-4 mt-2 rounded-lg">
          Tips to Reduce Your Electricity Bill
        </h1>
        <div className="p-6">
          {/* Tip 1 */}
          <div className="flex flex-wrap justify-start items-center w-full mb-10">
            <div className="w-2/5 md:w-1/2 xl:w-2/5 mb-4 md:mb-0">
              <img
                src={home5}
                alt=""
                className="w-4/5  md:w-2/5 mr-5  mx-auto rounded-full "
              />
            </div>
            <div className="w-full md:w-2/4">
              <p className="text-gray-700 font-abc text-xl mr-10">
                <b className="text-black text-xl">Switch to LED Bulbs:</b> LED
                bulbs are energy-efficient and last longer than traditional
                incandescent bulbs. They use significantly less electricity for
                the same amount of light.
              </p>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="flex flex-wrap justify-start items-center w-full mb-10">
            <div className="w-2/5 md:w-1/2 xl:w-2/5 mb-4 md:mb-0">
              <img
                src={home4}
                alt=""
                className="w-4/5  md:w-2/5 mr-5  mx-auto rounded-full "
              />
            </div>
            <div className="w-full md:w-2/4 ">
              <p className="text-gray-700 font-abc text-xl mr-4">
                <b className="text-black text-xl">Unplug Devices:</b> Even when
                turned off, many devices consume a small amount of electricity
                phantom or standby power. Unplug chargers, electronics, and
                appliances when not in use, or use power strips to easily cut
                off power to multiple devices.
              </p>
            </div>
          </div>

          {/* Tip 3 */}
          <div className="flex flex-wrap justify-start items-center w-full mb-10">
            <div className="w-2/5 md:w-1/2 xl:w-2/5 mb-4 md:mb-0">
              <img
                src={home3}
                alt=""
                className="w-4/5  md:w-2/5 mr-5  mx-auto rounded-full  "
              />
            </div>
            <div className="w-full md:w-2/4 ">
              <p className="text-gray-700 font-abc text-xl mr-4">
                <b className="text-black text-xl">Seal Leaks:</b> Insulate your
                home properly to prevent drafts and leaks, which can lead to
                energy loss. This will help your heating and cooling systems
                work more efficiently.
              </p>
            </div>
          </div>

          {/* Tip 4 */}
          <div className="flex flex-wrap justify-start items-center w-full mb-10">
            <div className="w-2/5 md:w-1/2 xl:w-2/5 mb-4 md:mb-0">
              <img
                src={home2}
                alt=""
                className="w-4/5  md:w-2/5  mr-5   mx-auto rounded-full object-contain aspect-square"
              />
            </div>

            <div className="w-full md:w-2/4 ">
              <p className="text-gray-700 font-abc text-xl mr-4">
                <b className="text-black text-xl">Cook Efficiently:</b> Use lids
                when cooking to retain heat, cook with appropriate pot sizes,
                and consider using a microwave or toaster oven for smaller meals
                as they use less energy than a full-sized oven.
              </p>
            </div>
          </div>

          {/* Tip 5 */}
          <div className="flex flex-wrap justify-start items-center w-full mb-10">
            <div className="w-2/5 md:w-1/2 xl:w-2/5 mb-4 md:mb-0">
              <img
                src={home1}
                alt=""
                className="w-4/5  md:w-2/5 mr-5 mx-auto rounded-full "
              />
            </div>
            <div className="w-full md:w-2/4 ">
              <p className="text-gray-700 font-abc text-xl mr-4">
                <b className="text-black text-xl">Maximize Natural Light:</b>{" "}
                During the day, open curtains and blinds to let in natural
                light. This reduces the need for artificial lighting and can
                also provide some warmth during colder months.
              </p>
            </div>
          </div>

          {/* Bonus Tips */}
          <div className="flex flex-wrap justify-between items-center w-full mb-6 mt-20 border border-gray-300 rounded-2xl shadow-box bg-green-400">
            <div className="w-full xl:w-7/12 mb-4 xl:mb-0">
              <h2 className="font-bold mb-3 pt-6 font-abc text-3xl pl-9">
                Bonus Tips
              </h2>
              <ul className="list-disc pl-14 text-gray-700 font-abc text-xl ">
                <li>
                  Check the reading meter weekly and use this Calculator for
                  calculating a weekly payable amount. This helps you know your
                  electricity bill without consulting others.
                </li>
                <li>
                  This chart clearly describes the units and rates, helping you
                  reduce your electricity bill and stay aware of electricity
                  usage.
                </li>
              </ul>
            </div>
            <div className="w-full xl:w-5/12">
              <img src={home6} alt="" className="w-2/4 mx-auto" />
            </div>
          </div>

          {/* Final Section */}
          <div className="mt-36 mb-44">
            <h2 className="text-3xl font-bold text-center mb-3 font-abc">
              Start Saving Today
            </h2>
            <p className="text-xl text-gray-700 font-abc text-center">
              Implement these strategies and make use of our tools to see a
              noticeable difference in your electricity bill. Every small change
              adds up to significant savings over time. Let's work together to
              make your home more energy-efficient and your bills more
              manageable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
