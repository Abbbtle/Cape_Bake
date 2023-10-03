import React from 'react';
import { MdOutlineBakeryDining } from "react-icons/md";
import flaking from '../assets/Images/Images/flaking.jpg';

const About = () => {
  return (
    <div name="about" className='bg-white px-10'>

      <h3 className='text-gray-800 text-5xl font-medium py-20'>Quality Ingredients for Delicious Baked goods</h3>

      {/* Cards */}
      <div className='md:flex pb-20 md:space-x-10'>
        {/* Card 1 */}
        <div className='text-gray-800 hover:bg-slate-100 rounded-xl p-5'>
          <div className='text-4xl'><MdOutlineBakeryDining/></div>
          <h4 className='text-2xl font-semibold py-2'>Skilled Baking Team Crafting Artisanal Treats</h4>
          <p className=''>Experience the cozy environment of our Bakery</p>
        </div>
        {/* Card 2 */}
        <div className='text-gray-800 hover:bg-slate-100 rounded-xl p-5'>
          <div className='text-4xl'><MdOutlineBakeryDining/></div>
          <h4 className='text-2xl font-semibold py-2'>Indulge in Our Wide Selection of Fresh Pastries</h4>
          <p className=''>Savour the Flavours and Aromas of Our Baked Goods</p>
        </div>
        {/* Card 3 */}
        <div className='text-gray-800 hover:bg-slate-100 rounded-xl p-5'>
          <div className='text-4xl'><MdOutlineBakeryDining/></div>
          <h4 className='text-2xl font-semibold py-2'>Relax and Unwind in Our Charming Bakery Cafe</h4>
          <p className=''>Enjoy a Warm Cup of Coffee with Your Favourite Treat</p>
        </div>
      </div>

      <div className='md:flex items-center space-x-20 md:mx-28'>
        <div>
          <img src= {flaking} alt="Bread making" className='h-auto w-[100vw] rounded-xl'/>
        </div>
        <div className='text-gray-800 space-y-5'>
          <h3 className='text-6xl font-medium'>Indulge in the exquisite flavours of our artisanal bakery creations.</h3>
          <p>Our bakery products are crafted with love and passion, ensuring a delightful experience for your taste buds.</p>
          <div className='md:flex'>
            <div>
              <h3 className='text-5xl font-medium'>50%</h3>
              <p>Experience the joy of our delectable treats today!</p>
            </div>
            <div>
              <h3 className='text-5xl font-medium'>50%</h3>
              <p>Savour the goodness of our freshly baked delights.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About