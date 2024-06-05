import React from 'react'
import Header from './Header'

const Story = () => {
  return (
    <section className='mb-5'>
        <div className='my-[3rem]'>
          <Header title='Our Story'/>  
        </div>
        
        <div className='flex justify-start lg:ml-[15%] items-center flex-col lg:flex-row md:flex-row '>
           <div className='relative border rounded-xl border-black overflow-hidden h-[20rem] min-w-[20rem]'>
            <img src="storyv2.jpg" alt="Our Story" className='h-[100%] max-w-[100%]' />
        </div>

        <div className='mx-[5rem] flex flex-col max-w-[50rem]'>
            <h2 className='text-white text-[2rem] mb-4'>Why Choose Us?</h2>
            <p className='text-white'>Experience the power of personalized fitness plans, expert guidance, and a supportive community—all at your fingertips with our website/app. Whether you're a beginner or a pro, take advantage of our innovative platform to track your progress, connect with like-minded individuals, and access exclusive resources designed to help you achieve your goals.
            Join us today and unlock your full potential with the convenience and benefits of our website/app. Your journey to a healthier, happier you starts here.
            </p>
            <div className='mt-[3rem] md:flex-row lg:flex flex-col  justify-evenly'>
                <div className='text-white flex-col justify-center items-center text-center mr-3'>
                   <h1 className='text-[1.5rem] text-red-500 font-bold'>20000+</h1>
                   <p className='text-lg'>Monthly Users</p>
                </div>
                <div className='text-white justify-center items-center text-center mx-3'>
                   <h1 className='text-[1.5rem] text-red-500 font-bold'>1000+</h1>
                   <p className='text-lg'>Detailed Exercises</p>
                </div>
                <div className='text-white flex-col justify-center items-center text-center mx-3'>
                   <h1 className='text-[1.5rem] text-red-500 font-bold'>60+</h1>
                   <p className='text-lg'>Countries</p>
                </div>
                
                <div className='text-white justify-center items-center text-center ml-3'>
                   <h1 className='text-[1.5rem] text-yellow-700 font-bold'>Unlimited</h1>
                   <p className='text-lg'>Potential</p>
                </div>
            </div>
        </div> 
        </div>
        
    </section>
  )
}

export default Story