import React from 'react'
import homepageImage from "..//assests/homepageImage.jpg"
import homepageImage2 from "..//assests/homepageImage2.jpg"
import homepageImage3 from "..//assests/homepageImage3.jpg"
import HomeImageSection from './HomeImageSection'


const Home = () => {
    return (
        <>
        <div id='Home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='mx-auto flex flex-col items-center justify-between h-full px-10 md:flex-row -mt-6'>
                <div className='flex flex-col justify-center h-full mr-10'>
                    <h2 className=' text-7xl font-semibold text-white max-w-lg '>Welcome to Next Level MMA</h2>
                    <p className='text-gray-500 py-4 max-w-lg'>At Next Level MMA, we are dedicated to making Combat Sports accessible to everyone. Since our inception in 2015, we have been at the forefront of promoting and developing Combat Sports through our state-of-the-art training center located in Saltlake. We proudly organize premier events such as K-PRO, Elblow, and Grind, which have become cornerstone gatherings in the Combat Sports community.

                        Our mission is to foster an ecosystem where Combat Sports Athletes, Teachers, Clubs, and related entities can thrive. Join us in our journey to elevate Combat Sports to new heights and make it a staple in the lives of enthusiasts and professionals alike.
                    </p>
                </div>
             <HomeImageSection
             image={homepageImage}
             image2={homepageImage2}
             image3={homepageImage3}
             />
            </div>
      

        </div>
        </>
    )
}

export default Home
