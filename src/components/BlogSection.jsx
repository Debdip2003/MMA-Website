import React from "react";
import blogImage1 from "..//assests/blogImage1.jpg";

const BlogSection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-10 md:py-0">
      <div className="mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left px-4 md:px-10 md:w-2/4 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-4">
            K-Pro Amateur 2
          </h2>
          <p className="text-gray-500 mb-2 text-sm md:text-base">
            Thursday, April 13, 2023
          </p>
          <p className="text-gray-500 py-4 mb-4 text-sm md:text-base lg:text-lg">
            K-PRO Amateurs has been designed to help nurture upcoming talents
            and encourage kids below 18 to gain experience and hone their
            skills. The event is being held on 29 April 2023 at Polle Mongal
            Samiti Club, Sodepur, Paschim Burdwan. Fire Fist Academy Head Coach,
            Shri Rahul Paswan, is the chief organizer. The event is sanctioned
            by the MIXED MARTIAL ARTS FEDERATION OF INDIA. We expect to see kids
            in the 12-14, 14-16, 16-18, and 18+ age groups.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Popular Blog Tags: <span className="text-white ml-4">#k-pro</span>
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={blogImage1}
            alt="aboutPage"
            className="rounded-2xl grayscale w-full md:w-[90%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
