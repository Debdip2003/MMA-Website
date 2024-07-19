import React from 'react'
import aboutpageImage3 from "..//assests/aboutpageImage3.jpg"

const Eon = () => {
    return (
        <div>
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='mx-auto flex flex-col items-center justify-between h-full px-10 md:flex-row'>
                <div className='md:h-full md:w-1/2 flex items-center justify-center'>
                    <img src={aboutpageImage3} alt='aboutPage' className='rounded-2xl grayscale w-full md:w-[90%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200' />
                </div>
                <div className='flex flex-col justify-center h-full pr-20 md:w-2/4 ml-10'>
                    <h2 className=' text-7xl font-semibold text-white mb-4'>Eon</h2>
                    <p className='text-gray-500 py-4 mb-4'>Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Eon
