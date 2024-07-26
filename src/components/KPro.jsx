import React from "react";
import { Link } from "react-router-dom";
import eventpageImage2 from "..//assests/eventpageImage2.jpg"

const KPro = () => {
  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="mx-auto flex flex-col items-center justify-between h-full px-10 md:flex-row">
          <div className="md:h-full md:w-1/2 flex items-center justify-center">
            <img
              src={eventpageImage2}
              alt="aboutPage"
              className="rounded-2xl grayscale w-full md:w-[90%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200"
            />
          </div>
          <div className="flex flex-col justify-center h-full pr-20 md:w-2/4 ml-10">
            <h2 className=" text-7xl font-semibold text-white mb-4">K-Pro</h2>
            <p className="text-gray-500 py-4 mb-4 text-3xl">
              Stay tuned for updates!
            </p>
            <p className="w-1/3 text-gray-500 py-4 mb-4 hover:underline hover:text-white underline-offset-4 duration-200">
              <Link to={"/Players"}>Click here to see all players!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPro;
