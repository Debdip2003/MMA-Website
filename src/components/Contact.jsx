import React from 'react';
import { FaFacebook, FaInstagram, FaInstagramSquare, FaMailBulk } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import contactpageImage from "..//assests/contactpageImage.jpg"

const Contact = () => {
    return (
        <>
            <div className='mx-auto flex flex-col md:flex-row justify-between items-center w-full pt-20'>
               
                <div className='flex flex-col justify-center h-full w-full md:w-1/2'>
                    <h2 className='text-5xl font-semibold text-white mb-10 text-white'>Contact Us</h2>
                    <div>
                        <div className='flex items-center mb-4'>
                            <FaLocationDot size={20} className='mr-4 text-white' />
                            <div>
                                <p className='text-xl mb-2 text-white'>Location</p>
                                <p className='text-gray-500 hover:text-white duration-200 hover:cursor-pointer'>
                                    AE 669, Near VIP Sweets, Quality, Sector 1, Bidhannagar, Kolkata, West Bengal 700064
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaPhone size={20} className='mr-4 text-white' />
                            <div>
                                <p className='text-xl mb-2 text-white'>Phone</p>
                                <p className='text-gray-500 hover:text-white duration-200 hover:cursor-pointer'>
                                    +91 98315 85746
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaMailBulk size={20} className='mr-4 text-white' />
                            <div>
                                <p className='text-xl mb-2 text-white'>Email</p>
                                <p className='text-gray-500 hover:text-white duration-200 hover:cursor-pointer'>
                                    admin@nextlevelmma.org
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaInstagramSquare size={20} className='mr-4 text-white' />
                            <div>
                                <p className='text-xl mb-2 text-white'>Socials</p>
                                <div className='flex'>
                                    <FaFacebook className='mr-2 hover:cursor-pointer hover:scale-125 text-gray-500 hover:text-white duration-200' />
                                    <FaInstagram className='hover:cursor-pointer hover:scale-125 text-gray-500 hover:text-white duration-200' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <img src={contactpageImage} alt='contactpage' className='w-4/5 h-2/3 rounded-2xl hover:scale-105 hover:cursor-pointer duration-200'/>
                </div>
            </div>
        </>
    );
}

export default Contact;
