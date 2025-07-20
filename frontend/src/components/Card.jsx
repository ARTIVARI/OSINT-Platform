import React from 'react'

const Card = ({img,title,discription}) => {
  return (
    <div className='bg-[#161616] rounded-md lg:mx-10 mx-2 flex flex-col justify-center items-start p-4 gap-4 lg:w-96 w-64 h-42'>
       <div className='flex flex-row gap-8 justify-center items-center'>
        <img className='w-10' src={img} alt="tool image" />
        <h2 className='text-2xl font-bold'>{title}</h2>
       </div>

       <p className='text-sm text-white text-justify'>{discription}</p>
       

    </div>
  )
}

export default Card 