import React from "react";
import SponsorCarousal from "./SponsorCarousal";
import AffiliationCarousal from "./AffiliationCarousal";

const SponsorAffiliations = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 via-black to-black">
      <div className="mx-10 py-20">
        <p className="text-5xl font-semibold text-white text-center mb-8">
          Affiliations
        </p>
        <div>
          <AffiliationCarousal />
        </div>
        <p className="text-5xl font-semibold text-white text-center mt-20 mb-8">
          Sponsors
        </p>
        <div>
          <SponsorCarousal />
        </div>
      </div>
    </div>
  );
};

export default SponsorAffiliations;
