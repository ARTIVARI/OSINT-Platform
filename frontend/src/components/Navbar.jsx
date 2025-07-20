import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen py-3 px-10  flex flex-row justify-between items-center bg-[#11161C]'>
         <img className='lg:h-9 sm:h-6 h-4' src='/logo2.png' alt=''/>

         <Link to='/application'>
           <div className='lg:py-2 p-1 lg:px-4 px-2  rounded-full bg-[#FE5722]'>Get Start</div>
         </Link>
    </div>
  )
}

export default Navbar