import React from "react";
import eventpageImage4 from "../assests/eventpageImage4.jpg";

const Eryx = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 md:px-10 py-10">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full gap-8 md:gap-0">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={eventpageImage4}
            alt="aboutPage"
            className="rounded-2xl grayscale w-full sm:w-3/4 md:w-[90%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center h-full md:w-2/4 text-center md:text-left px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4">
            Eryx
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-xl py-4 mb-4">
            ERYX is a Professional Boxing promotion based out of Kolkata, West
            Bengal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eryx;
