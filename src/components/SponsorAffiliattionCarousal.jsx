import React from 'react';
import aboutpageImage2 from "..//assests/aboutpageImage2.jpg"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SponsorAffiliattionCarousal = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  
        cssEase: "linear",
        arrows:false,
    };

    const images = [
     {
        src: aboutpageImage2,
     },
     {
        src: aboutpageImage2,
     },
     {
        src: aboutpageImage2,
     },
     {
        src: aboutpageImage2,
     },
     {
        src: aboutpageImage2,
     },
     {
        src: aboutpageImage2,
     },
     {
        src: aboutpageImage2,
     },
     {
        src: aboutpageImage2,
     },
    ];
    return (
        <div>
            <div>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                          <img src={image.src} alt='SponsorCarousal' className='w-4/5 mx-auto rounded-2xl'/>
                          
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default SponsorAffiliattionCarousal;
