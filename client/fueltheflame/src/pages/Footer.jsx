import React from 'react'
import '../fonts.css';
import { FaPhone, FaLocationArrow, FaEnvelopeOpenText, FaFacebook, FaInstagram, FaTiktok, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
        <div className='w-[100%] mt-[3rem]'>
          <div className='flex-col justify-center items-center lg:mx-[30%] mx-[5rem]'>
             <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] bmw-text text-white text-center'>BE APART OF OUR MISSION<br/>SUBSCRIBE TO OUR NEWSLETTER</h1>
              <p className='text-sm text-wrap text-white text-center'>Stay up-to-date with the latest news, updates, and exclusive offers by subscribing to our newsletter. Simply enter your email address below and click "Subscribe" to join our community!</p>
              <div className='flex my-[3rem] justify-center'> 
                <input type="email" name="email" id="email" autocomplete="email" placeholder='Enter your email address' class="mt-1 px-3 block w-[60%] shadow-sm sm:text-sm rounded-md"/>
                <div class="h-12 border-l-2 border-red-500 mx-5"></div>
                <label for="email" class="block text-sm font-medium text-white"><button className='bg-red-500 h-[3rem] p-3 rounded-full hover:bg-red-700'>Subscribe</button></label>
              </div>
          </div>

        {/* ACTUAL FOOTER */}
          <div className='bg-gray-700 border-t mx-[4rem] border-gray-500'>
            <div className='h-full p-[3rem] bg-black flex'>

              <div className='flex flex-col items-center justify-center w-full'>
                <div>
                  <img src="/logo-no-background.png" alt="Footer logo" width={500} className=' lg:-translate-x-[5rem]'/>
                </div>
                
                <div className='text-white flex-col lg:flex-row md:flex sm:flex-col items-center justify-between gap-[5rem] lg:mt-[3rem] sm:mt-[2rem] sm:px-[4rem]'>
                  <span className='flex mt-5'><FaPhone fontSize={25}/><h2 className='ml-5'>012-555-2020</h2></span>
                  <span className='flex mt-5'><FaEnvelopeOpenText fontSize={25}/><h2 className='ml-5'> fueltheflame@gmail.com</h2></span>
                  <span className='flex mt-5'><FaLocationArrow fontSize={25}/><h2 className='ml-5'>Kuala Lumpur, Malaysia</h2></span>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gray-700 border-t mx-[4rem] border-gray-500'>
            <div className='p-[2rem] bg-black flex flex-col lg:flex-row md:flex sm:flex-col justify-between'>
              <div className='text-white flex gap-[2rem] font-semibold flex-wrap mb-5'>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Services</h2>
                <h2>Register</h2>
                <h2>Login</h2>
              </div>
              <div className='flex gap-5 mb-5'>
                <span className='text-white'><FaFacebook/></span>
                <span className='text-white'><FaInstagram/></span>
                <span className='text-white'><FaPinterest/></span>
                <span className='text-white'><FaYoutube/></span>
                <span className='text-white'><FaTiktok/></span>
              </div>
              <div>
              <h3 className='text-white font-thin italic text-sm'>© 2024 | Fuel The Flame | All Rights Reserved. | Start Your Fire</h3>
              </div>
            </div>
          </div>
        </div>
           
    </section>
  )
}

export default Footer