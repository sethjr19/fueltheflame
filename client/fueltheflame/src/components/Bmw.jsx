import React from 'react'
import '../fonts.css'
import { FaAngleRight } from "react-icons/fa";

const Bmw = ({image, title, cta}) => {

  return (
    <div className='relative flex flex-grow flex-wrap'>
      
      <div className='relative z-1 flex items-center overflow-hidden h-[39rem] lg:h-[46rem] flex-1 min-w-[20rem]' onMouseEnter={() => setHovered(true)} 
         onMouseLeave={() => setHovered(false)}>
          <div className='absolute top-0 left-0 w-full h-[80%]'>
              <img className='w-full h-full object-cover ' width={800} height={730} src={image} alt="Details 1" />
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-0 transition-opacity duration-500'></div>

          <div className='absolute z-1 ml-auto top-0 p-[3rem]'>
              <h1 className='text-[2rem] text-wrap bmw-text text-white border-b-2 border-b-red-600'>{title}</h1>
              <span className='flex items-center mt-3'><button><p className='text-white text-[1rem] mr-2 mb-[3px]'>{cta}</p></button><FaAngleRight className='text-red-600'/></span>
          </div>
      </div>
    </div>
  )
}

export default Bmw