import React from "react";
import player from "..//assests/player.jpg"

const PlayerDetailsSection = () => {
  return (
    <div>
    <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className="w-full pt-10 pl-10 mb-14 flex justify-center items-center">
    <input
            type="text"
            placeholder="Search for players"
            className="w-1/3 p-2 rounded-xl flex justify-center items-center"
          ></input>
          </div>
        <div className='mx-auto flex flex-col items-start justify-between h-full px-10 md:flex-row'>
            
            <div className='w-2/3 flex justify-center items-center pt-6 ml-10 '>
                <img src={player} alt='aboutPage' className='rounded-2xl size-[68%]' />
            </div>
            <div className='flex flex-col items-center  h-full pr-20 w-full'>
                <h2 className=' text-5xl font-semibold text-white max-w-lg flex items-center'>JOSIM SK</h2>
                <div className='text-gray-500 py-4 max-w-lg flex flex-col justify-start mt-2 text-3xl'>
                   <p><span className="text-white">NICK NAME:</span> Scorpion</p>
                   <p><span className="text-white">BIRTHPLACE:</span> Beldanga, West Bengal</p>
                   <p><span className="text-white">DATE OF BIRTH:</span> 28.07.2005</p>
                   <p><span className="text-white">HEIGHT:</span> 5'9"</p>
                   <p><span className="text-white">WEIGHT:</span> 52kg</p>
                   <p><span className="text-white">NUMBER OF PROFESSIONAL FIGHTS:</span> 2</p>
                   <p><span className="text-white">WIN:</span> 2</p>
                   <p><span className="text-white">DEFEAT:</span> 0</p>
                   <p><span className="text-white">NUMBER OF KNOCKOUTS:</span> 1</p>
                   <p><span className="text-white">COACH:</span> Samim Ahmed</p>
                   <p><span className="text-white">CLUB:</span> MMA Murshidabad</p>              
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default PlayerDetailsSection;
