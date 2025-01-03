import React from "react";
import LatestEventCarousal from "./LatestEventCarousal";

const LatestEvents = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800">
      <div className="mx-10 py-20">
        <p className="text-5xl md:text-7xl font-semibold text-white max-w-lg mb-6 text-center">
          Events
        </p>
        <div className="mt-8">
          <LatestEventCarousal />
        </div>
      </div>
    </div>
  );
};

export default LatestEvents;
