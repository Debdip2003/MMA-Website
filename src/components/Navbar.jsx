import React from 'react'
import logo from "..//assests/logo.jpg"

const Navbar = () => {

    const links=[
        {
            id:1,
            link:'Home',
        },
        {
            id:2,
            link:'About',
        },
        {
            id:3,
            link:'Events',
        },
        {
            id:4,
            link:'Affiliations',
        },
        {
            id:5,
            link:'Blogs',
        },
    ]

    return (
        <div className='w-full h-16 bg-black flex justify-between items-center'>
            <div><img src={logo} alt='logo' className='h-full w-20 px-4 hover:cursor-pointer hover:scale-105 duration-200'/></div>
                  <ul className='flex justify-center items-center h-full'>
                {links.map(({id,link})=>{
             return <li className='px-4 cursor-pointer  text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white' key={id}>{link}</li>
            
                })}
            </ul>
            <div><span className='px-4 cursor-pointer text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white'>Contact Us</span></div>
        </div>
    )
}

export default Navbar
