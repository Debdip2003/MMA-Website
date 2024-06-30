import React from 'react'
import Slider from 'react-slick';
// import homepageImage3 from "..//assests/homepageImage3.jpg"
// import aboutpageImage2 from "..//assests/aboutpageImage2.jpg"
// import aboutpageImage3 from "..//assests/aboutpageImage3.jpg"
import homepageImage2 from "..//assests/homepageImage2.jpg"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LatestEventCarousal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,  
        // cssEase: "linear"
    };

    const images = [
     {
        src: homepageImage2,
        title: "Grind",
     },
     {
        src: homepageImage2,
        title: "K-pro",
     },
     {
        src: homepageImage2,
        title: "Eon",
     },
     {
        src: homepageImage2,
        title: "Eryx",
     },
     {
        src: homepageImage2,
        title: "Iris",
     },
    ];
    return (
        <div>
            <div className='mt-24'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className='px-2 relative group'>
                            <img
                                src={image.src}
                                alt="EventPageCarousal"
                                className='w-full rounded-2xl grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:cursor-pointer group-hover:opacity-30 transition duration-200'
                            />
                            <div className='absolute inset-0 flex items-end  justify-center opacity-0 group-hover:opacity-100 text-white text-5xl font-semibold hover:pb-10  duration-200'>
                                {image.title}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default LatestEventCarousal
