import React from 'react';
import aboutusImage4 from "..//assests/aboutpageImage4.jpg";

const ExpertTeamSection = () => {
    const contactInfo=[
        { name: "Joy Ghosh", phone: "+91 9007154749", email: "joyghosh@gmail.com" },
        { name: "Sourav Saha", phone: "+91 9007154750", email: "souravsaha@gmail.com" },
        { name: "Shiba Pradhan", phone: "+91 9007154751", email: "shibapradhan@gmail.com" }
    ]


    return (
        <div className='h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black'>
            <div className='text-center pt-10'>
                <p className='text-7xl font-semibold text-white'>Our Expert Team</p>
            </div>
            <div className='md:w-full md:h-2/3 mt-20 px-10 flex items-center justify-evenly gap-10'>
                {contactInfo.map((member, index) => (
                    <div key={index} className='bg-gray-800 w-1/3 h-full rounded-2xl p-6 hover:scale-105 duration-200 hover:cursor-pointer'>
                        <img src={aboutusImage4} alt='expertTeam' className='rounded-2xl h-3/4 w-full mb-4 object-cover'/>
                        <div className='flex flex-col items-center text-white'>
                            <p className='text-2xl font-semibold'>{member.name}</p>
                            <p>{member.phone}</p>
                            <p>{member.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpertTeamSection;
