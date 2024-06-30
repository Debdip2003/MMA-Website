import React from 'react'
import aboutpageImage from "..//assests/aboutpageImage.jpg"
import aboutpageImage2 from "..//assests/aboutpageImage2.jpg"
import aboutpageImage3 from "..//assests/aboutpageImage3.jpg"
import AboutImageSection from './AboutImageSection'

const About = () => {
    return (
        <div id='About'>
             <div className='h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black'>
            <div className='mx-10 flex flex-col items-center justify-between h-full px-10 md:flex-row py-20'>
             
              <AboutImageSection image={aboutpageImage} image2={aboutpageImage2} image3={aboutpageImage3}/>
        <div className='flex flex-col justify-center h-full mr-10'>
                    <h2 className=' text-7xl font-semibold text-white max-w-lg '>About</h2>
                    <p className='text-gray-500 py-4 max-w-lg'>Next Level MMA is a Combat Sports oriented Trust established in 2015 with a clear vision: to make Combat Sports available to the masses. Our journey began with the establishment of a premier Combat Sports training center in Saltlake, where we provide top-notch facilities and training for athletes of all levels.

Over the years, we have successfully organized a variety of events such as K-PRO, Elblow, and Grind, each designed to showcase talent, foster competition, and build a strong community around Combat Sports. Our commitment goes beyond just events and training; we aim to create a comprehensive ecosystem that supports the growth and development of Combat Sports Athletes, Teachers, Clubs, and associated entities.

At Next Level MMA, we believe in the power of sports to transform lives, build character, and unite communities. Our efforts are directed towards not only nurturing talent but also ensuring that the benefits of Combat Sports are accessible to everyone. Join us in our mission to bring Combat Sports to the next level.
                    </p>
                </div>
            </div>
      

        </div>
        </div>
    )
}

export default About
