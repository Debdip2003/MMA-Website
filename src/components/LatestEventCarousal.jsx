import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import events from "../data/events";

const LatestEventCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3, // Default: 3 images on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 image on mobile
          centerMode: false, // Disable centering so no part of the side images is shown
          focusOnSelect: true, // Ensure the selected image is focused
          variableWidth: false, // Ensure no width adjustments that cause overflow
        },
      },
    ],
  };

  return (
    <div className="mt-24">
      <Slider {...settings}>
        {events.map((image, index) => (
          <Link key={index} to={`/${image.title}`}>
            <div className="px-2 relative group">
              <img
                src={image.src}
                alt="EventPageCarousal"
                className="w-full h-2/3 gap-2 rounded-2xl grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:cursor-pointer group-hover:opacity-30 transition duration-200"
              />
              {/* For desktop view, show title on hover */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 text-white text-5xl font-semibold hover:pb-10 duration-200">
                {image.title}
              </div>
              {/* For mobile view, show title below image */}
              <div className="absolute bottom-0 w-full text-center py-2 bg-black bg-opacity-50 text-white text-xl md:hidden">
                {image.title}
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default LatestEventCarousal;
