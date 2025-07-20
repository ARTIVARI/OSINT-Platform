import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex lg:flex-col flex-row justify-between items-center p-2 lg:h-screen h-fit lg:max-w-fit w-screen  rounded-md bg-[#151C26]'>
       <Link to='/'>
        <img className='h-6 mt-4' src='/logo1.png' alt=''/>
       </Link>

       <div className='flex lg:flex-col lg:justify-center items-center justify-between flex-row gap-4 w-full p-3'>
        <Link to='/application'>
        <div>
          <img className='h-10' src='/h1logo.png' title='Hunter.io'/>
        </div>
        </Link>

        <Link to='/application/netlas'>
        <div>
          <img className='h-8' src='/n1.png' title='Netlas'/>
        </div>
        </Link>

        

        <Link to='/application/virustotal'>
        <div>
          <img className='h-6' src='/v1.png' title='Virus Total'/>
        </div>
        </Link>
       </div>


       <div className='lg:block hidden text-[#151C26]'>.</div>
    </div>
  )
}

export default Sidebar