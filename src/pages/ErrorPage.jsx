import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {


    const navigate=useNavigate()

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center gap-5'>
<p className='text-3xl'>
    404 Page not found
</p>
<p className='text-xl'>
The page you are looking for might be removed or is temporarily
unavailable
</p>
<button className='bg-orange-600 p-3 text-white text-xl rounded-2xl' onClick={()=>navigate("/")}>
    Back to Homepage
</button>
      </div>
    )
}

export default ErrorPage
