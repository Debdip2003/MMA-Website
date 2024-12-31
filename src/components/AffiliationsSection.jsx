import React, { useState } from "react";
import affiliations from "../data/affiliations";

const AffiliationsSection = () => {
  const [value, setValue] = useState("");

  const options = [
    { id: 1, label: "All States", value: "all" },
    { id: 2, label: "West Bengal", value: "West Bengal" },
    { id: 3, label: "Maharashtra", value: "Maharashtra" },
    { id: 4, label: "Madhya Pradesh", value: "Madhya Pradesh" },
  ];

  const handleClick = (event) => {
    setValue(event.target.value);
  };

  const filteredAffiliations =
    value === "all" || value === ""
      ? affiliations
      : affiliations.filter((affiliation) => affiliation.place === value);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 md:px-10 py-10">
      <div>
        <p className="text-4xl md:text-6xl lg:text-7xl font-semibold flex justify-center items-center text-white mb-8">
          Affiliations
        </p>
      </div>
      {/* <div className="flex justify-center md:justify-start">
        <select
          className="w-3/4 md:w-1/4 lg:w-1/6 p-3 rounded-xl font-semibold"
          value={value}
          onChange={handleClick}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div> */}
      <div className="mt-10 w-full flex justify-center md:justify-center flex-wrap gap-6 md:gap-8 lg:gap-12">
        {filteredAffiliations.map((image, index) => (
          <img
            src={image.src}
            alt="AffiliationsCarousal"
            key={index}
            className="w-2/5 sm:w-1/4 md:w-1/5 lg:w-1/6 rounded-2xl hover:scale-105 duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default AffiliationsSection;
