import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sponsors from '../data/sponsor';

const SponsorCarousal = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  
        cssEase: "linear",
        arrows:false,
    };

    return (
        <div>
            <div>
                <Slider {...settings}>
                    {sponsors.map((image, index) => (
                        <div key={index}>
                          <img src={image.src} alt='SponsorCarousal' className='w-4/5 mx-auto rounded-2xl'/>
                          
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default SponsorCarousal;
