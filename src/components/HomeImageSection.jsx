import React from "react";
import homepageImage6 from "../assests/homepageImage6.jpg";
import homepageImage2 from "../assests/homepageImage2.jpg";
import homepageImage3 from "../assests/homepageImage3.jpg";

const HomeImageSection = () => {
  return (
    <div className="py-8 md:py-16">
      {/* Mobile View - Only one image */}
      <div className="flex md:hidden justify-center items-center h-full">
        <div className="w-4/5 max-w-xs overflow-hidden">
          <img
            src={homepageImage6}
            alt="homepageImage"
            className="w-full rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
        </div>
      </div>

      {/* Desktop View - Show all three images */}
      <div className="hidden md:flex justify-center items-center h-full space-x-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={homepageImage2}
            alt="homepageImage2"
            className="w-96 max-w-lg rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
          <img
            src={homepageImage3}
            alt="homepageImage3"
            className="w-96 max-w-lg rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
        </div>
        <div className="w-96 max-w-lg overflow-hidden">
          <img
            src={homepageImage6}
            alt="homepageImage6"
            className="w-full rounded-2xl grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImageSection;
