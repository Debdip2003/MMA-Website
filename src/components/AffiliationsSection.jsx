import React, { useState } from 'react';
import affiliations from '../data/affiliations';

const AffiliationsSection = () => {
    const [value, setValue] = useState('');

    const options = [
        {
            label: "All States",
            value: 'all'
        },
        {
            label: "West Bengal",
            value: "West Bengal"
        },
        {
            label: 'Maharashtra',
            value: 'Maharashtra'
        },
        {
            label: "Madhya Pradesh",
            value: "Madhya Pradesh"
        }
    ];

    const handleClick = (event) => {
        setValue(event.target.value);
    };

    const filteredAffiliations = value === 'all' || value === '' 
        ? affiliations 
        : affiliations.filter((affiliation) => affiliation.place === value);

    return (
        <div>
            <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-10'>
                <div>
                    <p className='text-7xl font-semibold pt-10 flex justify-center items-center text-white'>Affiliated Clubs</p>
                </div>
                <div>
                    <select 
                        className='w-1/6 p-3 rounded-xl mt-8 font-semibold'
                        value={value}
                        onChange={handleClick}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div className='mt-10 w-full flex justify-start items-start flex-wrap gap-12'>
                    {filteredAffiliations.map((image, index) => (
                        <img src={image.src} alt='AffiliationsCarousal' key={index} className='w-1/5 rounded-2xl hover:scale-105 duration-200' />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AffiliationsSection;
