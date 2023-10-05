import React from 'react'
import various from '../assets/Images/Images/various-cakes.jpg'

const Products = () => {
  return (
    <div name="products">
      <div className='bg-[#e65828] py-10'>
        <div className='px-5 md:mx-[5%] md:flex space-y-2 items-center'>
          <div className='md:w-1/2 space-y-2'>
            <h6 className='font-medium'>Delicious</h6>
            <h4 className='text-5xl font-bold'>Indulge in our mouthwatering bakery delights</h4>
          </div>
          <div className='md:w-1/2 '>
            Experience the heavenly flavours of our best-selling bakery items. 
            From freshly baked bread to delectable pastries, we offer a wide range 
            of treats that will satisfy your cravings. Each item is crafted with love and care,
            using only the finest ingredients to ensure a delightful experience for your 
            taste buds.
          </div>
        </div>

        <div className='flex items-center justify-center pt-5'>
          <img src= {various} alt="various-cakes" className='h-auto w-[90vw] rounded-xl'/>
        </div>
      </div>

      
    </div>
  );
};

export default Products