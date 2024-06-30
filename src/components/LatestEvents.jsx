import React from 'react';
import LatestEventCarousal from './LatestEventCarousal';


const LatestEvents = () => {
   

    return (
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white px-10'>
            <div>
                <p className='text-7xl font-semibold pt-10 flex justify-center items-center'>Latest Events</p>
            </div>
            <LatestEventCarousal/>
        </div>
    );
};

export default LatestEvents;
