import React from 'react';
import LatestEventCarousal from './LatestEventCarousal';


const LatestEvents = () => {
   

    return (
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-10'>
            <div>
                <p className='text-7xl font-semibold pt-10 flex justify-center items-center text-white'>Latest Events</p>
            </div>
            <LatestEventCarousal/>
        </div>
    );
};

export default LatestEvents;
