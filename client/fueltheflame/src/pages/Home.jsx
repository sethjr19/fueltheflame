import React from 'react'
import Login from './Login';
import About from './About';
import './Home.css'
import {Link, NavLink} from 'react-router-dom';
import Details from './Details';
import Header from './Header';
import Story from './Story';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='bg-black flex flex-col'>
       <header className='w-[100%] lg:px-[8rem] md:px-[8rem] lg:h-[100px] h-[100px] lg:py-[2rem] md:py-[0] bg-black flex justify-center items-center z-[99]'>
            <div className='flex justify-between w-full text-white h-[100%]'>
                <div className='flex justify-center items-center'>
                    <img className='w-[300px] h-[300px] -translate-x-[130px]' src="logo-white-2.png" alt="" />
                </div>
              
                <div className='flex gap-5 justify-center items-center'>
                    <Link to='/login'>
                        <button className='bg-gray-500 text-white px-3 py-2 rounded-md'><h2>Login</h2></button>
                    </Link>

                    <Link to='/register'>
                        <button className=' bg-red-500 text-white px-3 py-2 rounded-md' ><h2>Sign Up</h2></button>
                    </Link>
                </div>
            </div>
        </header>

            <div className='flex justify-center items-center mx-[3] h-[48rem] relative'>
                {/* <div className='w-[100%] top-[65%] flex justify-center'>
                    <button className='text-white text-2l p-5 bg-slate-400 outline-none bg-opacity-70 mx-2'>Start Your Journey</button>
                </div> */}
                <div className=' absolute left-0 px w-[100%] flex justify-center mb-5'>
                    <div className='flex justify-center items-center text-center flex-col flex-wrap text-white text-opacity-90'>
                        <h2 className='text-[3rem] mb-[3rem]'>
                            Fuel Your Flame, Sculpt Your Strength
                        </h2>
                        <p className=' w-[30rem] text-xl'>
                        Explore our diverse range of workouts and programs designed to ignite your passion for fitness. Join our community of warriors as we sweat, burn, and rise to new heights together!
                        </p>

                        <button className='mt-[3rem] border border-red-500 px-[5rem] py-4 font-extrabold bg-red-500'>
                            SET ABLAZE
                        </button>
                    </div>
                </div>
                <img className="object-cover h-[100%]" src="hero-updated.jpg" alt="Hero banner" />
            </div> 

        <div>
            <Story/>
        </div>
        <div>
            <Details/>
           
        </div>
        <div>
            <About/> 
        </div>
        <div>
            <Footer/>
        </div>
        
        
    </div>
  )
}

export default Home