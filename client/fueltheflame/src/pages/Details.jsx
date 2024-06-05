import React from 'react';

import Bmw from '../components/Bmw';
import Header from './Header';

const Details = () => {
  return (
    <section className=' bg-black'>
      
        <div className='p-[5rem] text-white'>
        <Header title='Our Program'/>
        </div>
        <div className='flex lg:flex-row sm:flex-col flex-wrap'>
            <Bmw image="details-1.png" title='Strength & Conditioning Classes' cta='Explore Classes'/>
            <Bmw image="crossfit.jpg" title='CrossFit Classes' cta='Explore Classes'/>
            <Bmw image="pilates.jpg" title='Yoga & Pilates' cta='Explore Classes'/>
        </div>
        
        
        
    </section>
    
  )
}

export default Details