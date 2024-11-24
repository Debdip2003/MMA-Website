import React from "react";
import aboutpageImage from "../assests/aboutpageImage.jpg";
import aboutpageImage6 from "../assests/aboutpageImage6.jpg";
import aboutpageImage7 from "../assests/aboutpageImage7.jpg";

const AboutImageSection = () => {
  return (
    <div className="py-8 md:py-16">
      {/* Mobile View - Only one image */}
      <div className="flex md:hidden justify-center items-center h-full">
        <div className="w-4/5 max-w-xs overflow-hidden">
          <img
            src={aboutpageImage}
            alt="AboutImage"
            className="w-full rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
        </div>
      </div>

      {/* Desktop View - Show all three images */}
      <div className="hidden md:flex justify-center items-center h-full space-x-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={aboutpageImage6}
            alt="AboutImage6"
            className="w-[350px] max-w-lg rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
          <img
            src={aboutpageImage7}
            alt="AboutImage7"
            className="w-[350px] max-w-lg rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
        </div>
        <div className="w-[350px] max-w-lg overflow-hidden">
          <img
            src={aboutpageImage}
            alt="AboutImage"
            className="w-full rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImageSection;
