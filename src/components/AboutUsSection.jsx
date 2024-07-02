import React from 'react'
import aboutpageImage4 from "..//assests/aboutpageImage4.jpg"

const AboutUsSection = () => {
    return (
        <div>
            <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
                <div className='mx-auto flex flex-col items-center justify-between h-full px-10 md:flex-row'>
                    <div className='md:h-full md:w-1/2 flex items-center justify-center'>
                        <img src={aboutpageImage4} alt='aboutPage' className='rounded-2xl grayscale hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200' />
                    </div>
                    <div className='flex flex-col justify-center h-full pr-20'>
                        <h2 className=' text-7xl font-semibold text-white max-w-lg '>Who are we?</h2>
                        <p className='text-gray-500 py-4 max-w-lg'>
                            Next Level MMA is the first MMA gym in Salt Lake, and it represents a pioneering effort to make MMA accessible to everyone in the area. Despite Salt Lake being filled with numerous modern amenities like malls, supermarkets, multiplexes, institutes, and western-style gyms, it lacked a dedicated MMA training center until we established our gym in 2015.

                            The youth of Salt Lake have shown a keen interest in MMA, inspired by their enthusiasm for UFC and the sport in general. Our goal is to provide them with the opportunity to train in MMA, filling a significant void in the local sports scene.

                            At Next Level MMA, we offer training in various combat disciplines, including Boxing, Kickboxing, and Brazilian Jiu-Jitsu (BJJ). Our comprehensive programs are designed to cater to both beginners and advanced practitioners, helping them to develop their skills and achieve their personal fitness and combat sports goals.
                            Our mission extends beyond just training individuals; we aim to create an ecosystem that supports the growth of combat sports athletes, teachers, clubs, and related entities. By fostering a vibrant combat sports community, we hope to inspire more people to engage in and appreciate the discipline, dedication, and benefits of MMA.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection
