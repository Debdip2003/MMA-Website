import React from 'react'
import eventpageImage1 from "..//assests/eventPageImage1.jpg"

const Grind = () => {
    return (
        <div>
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='mx-auto flex flex-col items-center justify-between h-full px-10 md:flex-row'>
                <div className='md:h-full md:w-1/2 flex items-center justify-center'>
                    <img src={eventpageImage1} alt='aboutPage' className='rounded-2xl grayscale w-full md:w-[90%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200' />
                </div>
                <div className='flex flex-col justify-center h-full pr-20 md:w-2/4 ml-10'>
                    <h2 className=' text-7xl font-semibold text-white mb-4'>Grind</h2>
                    <p className='text-gray-500 py-4 mb-4'>Get ready for the most anticipated tournament of the year, organized by Next Level MMA! This is your chance to witness some of the most thrilling combat sports action as our talented young fighters step into the Octagon to showcase their skills.

                        Join us for an unforgettable event filled with intense battles, impressive techniques, and electrifying energy. Whether you're a die-hard fan of combat sports or just looking for an exciting event to attend, this tournament is sure to deliver.

                        Stay tuned for further updates on the Players Fight Card, including detailed matchups, fighter profiles, and all the information you need to make the most of this epic event.

                        Don't miss out on the opportunity to be part of this incredible experience! Mark your calendars and prepare to cheer on the future stars of combat sports.</p>
                    <p className='text-gray-500 hover:text-white hover:cursor-pointer  duration-200 w-fit'>Wednesday, March 23, 2022</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Grind
