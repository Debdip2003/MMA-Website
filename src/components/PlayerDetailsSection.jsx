import React from "react";
import playerImage from "..//assests/playerImage.png"

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
            
            <div className='w-[85%] flex justify-center items-center pt-6 ml-10 mr-20'>
                <img src={playerImage} alt='aboutPage' className='rounded-2xl w-full h-full' />
            </div>
            <div className='flex flex-col items-center  h-full pr-20 md:w-1/2 '>
                <h2 className=' text-5xl font-semibold text-white max-w-lg flex items-center'>ISHAN DAS</h2>
                <div className='text-gray-500 py-4 max-w-lg flex flex-col justify-start'>
                   <p><span className="text-white">NICK NAME:</span> Box-Man</p>
                   <p><span className="text-white">BIRTHPLACE:</span> Kolkata, West Bengal</p>
                   <p><span className="text-white">DATE OF BIRTH:</span> 18/01/1993</p>
                   <p><span className="text-white">LENGTH:</span> 163cm</p>
                   <p><span className="text-white">WEIGHT:</span> 52kg</p>
                   <p><span className="text-white">EVENT:</span> LOW KICK</p>
                   <p><span className="text-white">NUMBER OF PROFESSIONAL FIGHTS:</span> 15</p>
                   <p><span className="text-white">WIN:</span> 15</p>
                   <p><span className="text-white">DEFEAT:</span> 0</p>
                   <p><span className="text-white">NUMBER OF KNOCKOUTS:</span> 0</p>
                   <p><span className="text-white">CURRENT WORLD RANKING:</span> 8</p>
                   <p><span className="text-white">CURRENT NATIONAL RANKING:</span> 1</p>
                   <p><span className="text-white">COACH:</span> Biswasnath Roy</p>
                   <p><span className="text-white">CLUB:</span> Ronin's MMA Kolkata</p>
                   <p><span className="text-white">CHAMPIONSHIIP RATING AND ACHIEVEMENTS:</span> WAKO Senior World Championship (Portugal) - 3rd Position, Member of WAKO India Kickboxing Federation, 8 times chanpion of national compitition </p>
                
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default PlayerDetailsSection;
