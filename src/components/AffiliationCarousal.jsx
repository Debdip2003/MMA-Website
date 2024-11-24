import React from "react";
import Slider from "react-slick";
import affiliations from "../data/affiliations";

const AffiliationCarousal = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3, // Default: 3 images on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 2, // Show 2 images on mobile
          centerMode: false, // Disable centering for better fit
          focusOnSelect: true, // Optional: makes image clickable
        },
      },
    ],
  };

  return (
    <div className="mt-8">
      <Slider {...settings}>
        {affiliations.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt="AffiliationsCarousal"
              className="w-4/5 mx-auto rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AffiliationCarousal;
