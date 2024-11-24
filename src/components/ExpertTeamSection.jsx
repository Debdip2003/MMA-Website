import React from "react";
import contactInfo from "../data/contactInfo";

const ExpertTeamSection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black">
      <div className="text-center pt-6">
        <p className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white">
          Our Expert Team
        </p>
      </div>
      <div className="mt-8 md:mt-16 px-4 md:px-10 flex flex-wrap items-center justify-center gap-8">
        {contactInfo.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 w-full md:w-1/3 lg:w-1/4 max-w-sm h-auto rounded-2xl p-6 hover:scale-105 duration-200 hover:cursor-pointer"
          >
            <img
              src={member.img}
              alt="expertTeam"
              className="rounded-2xl h-56 w-full mb-4 object-cover"
            />
            <div className="flex flex-col items-center text-white">
              <p className="text-xl md:text-2xl font-semibold">{member.name}</p>
              <p className="text-sm md:text-base">{member.phone}</p>
              <p className="text-sm md:text-base">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeamSection;
