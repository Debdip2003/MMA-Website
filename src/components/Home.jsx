import React from "react";
import HomeImageSection from "./HomeImageSection";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800  pt-6">
      <div className="mx-auto flex flex-col items-center justify-between h-full px-6 md:px-10 md:flex-row md:space-x-10">
        <div className="flex flex-col justify-center h-full text-center md:text-left md:mr-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white max-w-lg">
            Welcome to Next Level MMA
          </h2>
          <p className="text-gray-500 py-4 max-w-lg text-sm sm:text-base md:text-lg lg:text-xl">
            {/* At Next Level MMA, we are dedicated to making Combat Sports
            accessible to everyone. Since our inception in 2015, we have been at
            the forefront of promoting and developing Combat Sports through our
            state-of-the-art training center located in Saltlake. We proudly
            organize premier events such as K-PRO, Elblow, and Grind, which have
            become cornerstone gatherings in the Combat Sports community. Our
            mission is to foster an ecosystem where Combat Sports Athletes,
            Teachers, Clubs, and related entities can thrive. Join us in our
            journey to elevate Combat Sports to new heights and make it a staple
            in the lives of enthusiasts and professionals alike. */}
            At Next Level MMA, we are dedicated to create a Combat Sports
            Ecosystem in Eastern India. The Ecosystem includes Combat Sports
            Athletes, Coaches, Clubs, Events, Equipment Manufacturers, Center of
            Excellence, Health Clubs, University etc. Through the ecosystem we
            want to create a Combat Sports Industry that will benefit all its
            stakeholders. We want to oversee a lot of Combat Sports relatated
            activities around Bengal and East India. Our aim is to make Kolkata,
            the Combat Sports Capital of India.
          </p>
        </div>
        <div className="w-full mt-6 md:mt-0 md:w-auto">
          <HomeImageSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
