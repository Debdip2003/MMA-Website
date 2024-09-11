import React from 'react'
import Slider from 'react-slick';
import affiliations from '../data/affiliations';

const AffiliationCarousal = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  
        cssEase: "linear",
        arrows:false,
        rtl:true
    };

    return (
        <div>
             <div>
            <div>
                <Slider {...settings}>
                    {affiliations.map((image, index) => (
                        <div key={index}>
                          <img src={image.src} alt='AffiliationsCarousal' className='w-3/5 mx-auto rounded-2xl'/>
                          
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </div>
    )
}

export default AffiliationCarousal
