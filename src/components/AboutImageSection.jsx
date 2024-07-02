import React from 'react'
import aboutpageImage from "..//assests/aboutpageImage.jpg"
import aboutpageImage2 from "..//assests/aboutpageImage2.jpg"
import aboutpageImage3 from "..//assests/aboutpageImage3.jpg"


const AboutImageSection = ()=> {
    return (
        <div>
              <div className='flex justify-center items-center h-screen -ml-40'>
                    <div>
                        <img
                        src={aboutpageImage2}
                        alt='homepageImage2'
                        className='w-5/6 mb-6 mx-auto rounded-2xl max-w-lg -mr-10 grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 hover:rounded-2xl duration-200'
                        />
                         <img
                        src={aboutpageImage3}
                        alt='homepageImage2'
                        className='w-5/6 mx-auto rounded-2xl max-w-lg -mr-10 grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 hover:rounded-2xl duration-200'
                        />
                    </div>
            <div className='overflow-hidden'>
                <img 
                    src={aboutpageImage} 
                    alt='homepageImage' 
                    className='size-[65%] mx-auto rounded-2xl max-w-lg grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 hover:rounded-2xl duration-200'
                />
            </div>
        </div>
        </div>
    )
}

export default AboutImageSection
