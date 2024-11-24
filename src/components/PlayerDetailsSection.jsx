import React from "react";
import player from "../assests/player.jpg";
const PlayerDetailsSection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 md:px-10 py-10">
      <div className="w-full pt-6  mb-14 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for players"
          className="w-full sm:w-2/3 md:w-1/3 p-2 rounded-xl"
        />
      </div>
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full gap-8 md:gap-0">
        {/* Image Section */}
        <div className="w-full md:w-2/3 flex justify-center items-center pt-6 md:pt-0">
          <img
            src={player}
            alt="Player"
            className="rounded-2xl w-3/4 sm:w-2/3 md:w-3/4 lg:w-[68%] hover:scale-105 duration-200"
          />
        </div>

        {/* Player Info Section */}
        <div className="flex flex-col justify-center items-center h-full md:w-2/4 text-center md:text-left px-4 md:px-10">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            JOSIM SK
          </h2>
          <div className="text-gray-500 py-4 max-w-lg flex flex-col justify-start mt-2 text-xl">
            <p>
              <span className="text-white">NICK NAME:</span> Scorpion
            </p>
            <p>
              <span className="text-white">BIRTHPLACE:</span> Beldanga, West
              Bengal
            </p>
            <p>
              <span className="text-white">DATE OF BIRTH:</span> 28.07.2005
            </p>
            <p>
              <span className="text-white">HEIGHT:</span> 5'9"
            </p>
            <p>
              <span className="text-white">WEIGHT:</span> 52kg
            </p>
            <p>
              <span className="text-white">NUMBER OF PROFESSIONAL FIGHTS:</span>{" "}
              2
            </p>
            <p>
              <span className="text-white">WIN:</span> 2
            </p>
            <p>
              <span className="text-white">DEFEAT:</span> 0
            </p>
            <p>
              <span className="text-white">NUMBER OF KNOCKOUTS:</span> 1
            </p>
            <p>
              <span className="text-white">COACH:</span> Samim Ahmed
            </p>
            <p>
              <span className="text-white">CLUB:</span> MMA Murshidabad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsSection;
