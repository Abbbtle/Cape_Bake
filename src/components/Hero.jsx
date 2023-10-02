import React from 'react'
import baked from '../assets/Images/Images/baked-goods.jpg'

const Hero = () => {
  return (
    <div name="hero" className='bg-[#e65828] h-[100vh] w-auto'>
      <div className='md:flex items-center justify-center py-40 mx-auto'>

        <div className='flex flex-col items-center text-white'>
          <h1 className='text-5xl font-semibold'>Delicious Baked Goods<br/> and Inviting<br/> Atmosphere</h1>
          <p className='text-xl font-light'>
            Welcome to our bakery, where you'll find a warm and inviting atmosphere paired with our delicious selection of freshly 
            baked goods.
          </p>
        </div>

        <div className='ml-40 flex items-center'>
          <img 
            src= {baked} 
            alt="baked-goods" 
            width={"60%"}
            height={"auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero