import React from 'react';
import Slider from 'react-slick';
import homepageImage2 from "../assests/homepageImage2.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const LatestEventCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const images = [
    {
      id: 1,
      src: homepageImage2,
      title: "Grind",
    },
    {
      id: 2,
      src: homepageImage2,
      title: "K-Pro",
    },
    {
      id: 3,
      src: homepageImage2,
      title: "Eon",
    },
    {
      id: 4,
      src: homepageImage2,
      title: "Eryx",
    },
    {
      id: 5,
      src: homepageImage2,
      title: "Iris",
    },
  ];

  return (
    <div className='mt-24'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Link key={index} to={`/${image.title}`}>
            <div className='px-2 relative group'>
              <img
                src={image.src}
                alt="EventPageCarousal"
                className='w-full rounded-2xl grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:cursor-pointer group-hover:opacity-30 transition duration-200'
              />
              <div className='absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 text-white text-5xl font-semibold hover:pb-10 duration-200'>
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
