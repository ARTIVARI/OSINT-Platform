import React from 'react'

const Title = ({title}) => {
  return (
    <div className='flex flex-col w-fit'>
        <h3 className='lg:text-3xl text-xl font-bold '>{title}
          <div className='h-1 w-full rounded-full bg-[#FE5722]'></div>

        </h3>
        
      </div>
  )
}

export default Title
