import React from "react";
import aboutpageImage4 from "..//assests/aboutpageImage4.jpg";

const AboutUsSection = () => {
  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="mx-auto flex flex-col items-center justify-between h-full px-10 md:flex-row">
          <div className="md:h-full md:w-1/2 flex items-center justify-center">
            <img
              src={aboutpageImage4}
              alt="aboutPage"
              className="rounded-2xl grayscale w-full md:w-[95%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200"
            />
          </div>
          <div className="flex flex-col justify-center h-full pr-20">
            <h2 className=" text-7xl font-semibold text-white max-w-lg ">
              Who are we?
            </h2>
            <p className="text-gray-500 py-4 max-w-lg">
              Next Level MMA is a Trust (NPO) created to promote Comat Sports in
              West Bengal. We are registered under West Bengal Registration
              Rules 1962. We aim to make Kolkata the Combat Sports capital of
              India. We plan to achieve this by establishing multiple martial
              arts training centers, holding multiple Combat Sports events round
              the year, establishing a Combat Sports University and Center of
              Excellence. In the long term, we would also like to establish a
              Combat Sports equipment manufacturing unit. A yearly Awards night
              is conceptualised to award and reward Combat Sports personalities.
              We believe all of the above activities can help us achieve our
              objectives and bring glory to Bengal and its people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
