import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-screen flex-row text-white h-screen px-10 bg-cover bg-center flex  justify-start items-center' style={{ backgroundImage: `url('/bg.png')` }}>

        <div className='basis-1/2 flex flex-col justify-center items-start lg:px-10 px-2 gap-5'>
         <div className='flex flex-col gap-2'>
            <h2 className='text-5xl font-bold'><span className='text-[#FE5722]'>I</span>ntelHunt</h2>
            <h3 className='text-xl font-bold'>An OSINT</h3>
            <h3 className='text-2xl font-bold'>Research Tool</h3>
         </div>

         <Link to='/application'>
            <div className='py-2 px-4 rounded-full bg-[#FE5722]'>Get Start</div>
         </Link>
        </div>


        <div className='basis-1/2  flex flex-col justify-center items-center '>
            <div className=' sm:block hidden'>
                    <img src='/hero.png'/>
            </div>
        </div>
           
    </div>
  )
}

export default Hero