import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
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
        {
            id:6,
            link:'Contact',
        },
    ]
    return (
        <>
        <div className='bg-black w-full  pb-2 flex flex-col justify-center items-center'>
            <div className=' mb-8'>
                <p className='text-5xl font-semibold pt-10 flex justify-center items-center text-white'>Next Level MMA</p>
            </div>
            <div>
            <ul className='flex justify-center items-center h-full'>
                {links.map(({id,link})=>{
             return <li className='px-4 cursor-pointer text-xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white' key={id}><Link to={link==='Home'? "/":`/${link}`}>{link}</Link></li>
            
                })}
            </ul>
            </div>
            <p className='text-white mt-10 pt-2 w-[70%] flex items-center justify-center text-sm border-t-white border-t-[1px]'>
        Copyright © 2024 Next Level MMA. All rights reserved
        </p>
        </div>
      
        </>
    )
}

export default Footer
