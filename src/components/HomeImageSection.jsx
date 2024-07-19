import React from 'react'
import homepageImage from "..//assests/homepageImage.jpg"
import homepageImage2 from "..//assests/homepageImage2.jpg"
import homepageImage3 from "..//assests/homepageImage3.jpg"


const HomeImageSection = () => {
    return (
        <div>
               <div className='flex justify-center items-center h-screen '>
                    <div>
                        <img
                        src={homepageImage2}
                        alt='homepageImage2'
                        className='w-5/6 mb-4 mx-auto rounded-2xl max-w-lg -mr-10 grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 hover:rounded-2xl duration-200'
                        />
                         <img
                        src={homepageImage3}
                        alt='homepageImage2'
                        className='w-5/6 mx-auto rounded-2xl max-w-lg -mr-10 grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 hover:rounded-2xl duration-200'
                        />
                    </div>
            <div className='overflow-hidden'>
                <img
                    src={homepageImage} 
                    alt='homepageImage' 
                    className='size-[75%] mx-auto rounded-2xl max-w-lg grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-105 hover:rounded-2xl duration-200'
                />
            </div>
        </div>
        </div>
    )
}

export default HomeImageSection
