import React from 'react'
import { about } from '../data'
import './Home.css'
import Header from './Header'

const About = () => {
  return (
    <section className='bg-black lg:-translate-y-[15%]'>
        <div className='relative flex flex-col items-center justify-center'>
            <div className='my-[3rem]'>
            <Header title='Join Our Community'/> 
            
            </div>

            <div className='flex relative justify-center items-center'>
                <div className='h-[50vh] max-w-[100vw] object-cover lg:relative absolute z-1'>
                <img src="/community.jpg" alt="Community" /> 
                </div>  

                <div className='justify-center items-center pb-[2rem] mx-[3rem] z-[99] flex flex-wrap flex-col'>
                <div className='max-w-[40rem]  sm:w-[30rem] lg:w-[40rem] flex z-[99] flex-wrap items-center justify-center'>
                    {about.map((item, index) => (
                    <div key={index} className="bg-red-600 p-4 m-2 shadow-md h-[5rem] w-[5rem] lg:h-[10rem] lg:w-[10rem] md:h-[10rem] md:w-[10rem]">
                        {item.icon && <item.icon className="mr-2  text-white w-6 h-6" />}
                        <h2 className=" hidden sm:block md:hidden lg:block xl:block md:text-md lg:text-md font-bold mt-3 text-white">{item.title}</h2>
                    </div>
                    ))}
                    </div> 
                    <button className='text-white mt-5 p-3 border border-red-500 rounded-2xl hover:bg-red-500 transition-all'>Find Out More</button>
                </div>        
             </div>
            
        </div>
        
    </section>
  )
}

export default About