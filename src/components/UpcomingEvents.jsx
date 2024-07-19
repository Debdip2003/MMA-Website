import React from 'react'
import { Link } from 'react-router-dom'
import aboutpageImage3 from "..//assests/aboutpageImage3.jpg"
import events from '../data/events'

const UpcomingEvents = () => {

    return (
        <div>
            <div>
                <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
                    <div className='mx-auto flex flex-col items-center justify-between h-full px-10 md:flex-row'>
                        <div className='md:h-full md:w-1/2 flex items-center justify-center'>
                            <img src={aboutpageImage3} alt='aboutPage' className='rounded-2xl grayscale w-full md:w-[90%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200' />
                        </div>
                        <div className='flex flex-col justify-center h-full pr-20 md:w-2/4 ml-10'>
                            <h2 className=' text-7xl font-semibold text-white mb-4'>Upcoming Events</h2>
                            <p className='text-gray-500 py-4'>At Next Level MMA, we're dedicated to bringing the thrill of combat sports to enthusiasts and athletes alike. Our upcoming events are designed to challenge, inspire, and showcase the best talent in the industry. Whether you're a seasoned fighter or a passionate fan, there's something for everyone. Check out our lineup of upcoming events:</p>
                            <div className='flex w-full flex-wrap h-full md:h-1/4'>
                                {events.map(({ id, title }) => {
                                    return (

                                        <div key={id} className='py-4 w-1/4 flex justify-start items-center p-2 rounded-2xl '>
                                            <Link to={`/${title}`}>  <p className='cursor-pointer text-3xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white'>{title}</p></Link>

                                        </div>

                                    )

                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents
