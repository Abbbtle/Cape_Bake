import React from 'react'
import baked from '../assets/Images/Images/baked-goods.jpg'

const Hero = () => {
  return (
    <div name="hero" className='bg-[#e65828] h-[100vh] w-auto'>
      <div className='md:flex justify-between items-center py-40 mx-10'>

        <div className='flex flex-col text-white'>
          <h1 className='text-8xl font-medium'>Delicious Baked Goods<br/> and Inviting<br/> Atmosphere</h1>
          <p className='text-xl font-light'>
            Welcome to our bakery, where you'll find a warm and inviting atmosphere paired with our delicious selection of freshly 
            baked goods.
          </p>
        </div>

        <div className=''>
          <img 
            src= {baked} 
            alt="baked-goods" 
            className='h-auto w-[80vw] rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero