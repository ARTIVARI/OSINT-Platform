import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Application = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse gap-3 lg:p-2 p-0'>
        <div className=''>
            <Sidebar/>
        </div>


        <div className='w-screen'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Application