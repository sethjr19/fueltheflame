import React from 'react'

const Card = ({name, image}) => {
  return (
    <div className='h-[20rem] w-[15rem] bg-gray-300 flex justify-center items-center relative'>
        <h2 className=''>{name}</h2>
        <div className='absolute top-0 left-0 w-full h-full'>
              <img className='w-full h-full object-cover 'src={image} alt="Details 1" />
        </div>
    </div>
  )
}

export default Card