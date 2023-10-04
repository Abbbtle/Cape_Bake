import React from 'react'
import pretzel from '../assets/Images/Images/pretzel.gif'

const Hero = () => {
  return (
    <div name="hero" className='bg-[#e65828] h-[100vh] w-auto'>
      <div className='md:flex justify-between items-center py-40 mx-10'>

        <div className='flex flex-col text-white space-y-5 md:space-y-0'>
          <h1 className='text-5xl text-center md:text-start md:text-8xl font-medium'>Delicious Baked Goods<br/> and Inviting<br/> Atmosphere</h1>
          <p className='text-xl text-center md:text-start font-light'>
            Welcome to our bakery, where you'll find a warm and inviting atmosphere paired with our delicious selection of freshly 
            baked goods.
          </p>
        </div>

        <div className='py-5 md:py-0'>
          <img 
            src= {pretzel} 
            alt="baked-goods" 
            className='h-[60vh] w-[80vw] rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero