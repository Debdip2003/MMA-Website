import React from 'react'
import Slider from 'react-slick';
import aboutpageImage2 from "..//assests/aboutpageImage2.jpg"

const AffiliationCarousal = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  
        cssEase: "linear",
        arrows:false,
        rtl:true
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
        </div>
    )
}

export default AffiliationCarousal
