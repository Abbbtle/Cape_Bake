import React from 'react'
import various from '../assets/Images/Images/various-cakes.jpg'

const Products = () => {
  return (
    <div name="products">
      <div className='bg-[#e65828] py-20'>
        <div>
          <div>
            <h6>Delicious</h6>
            <h4>Indulge in our mouthwatering bakery delights</h4>
          </div>
          <div>
            Experience the heavenly flavours of our best-selling bakery items. 
            From freshly baked bread to delectable pastries, we offer a wide range 
            of treats that will satisfy your cravings. Each item is crafted with love and care,
            using only the finest ingredients to ensure a delightful experience for your 
            taste buds.
          </div>
        </div>

        <div className='flex items-center justify-center py-10'>
          <img src= {various} alt="various-cakes" className='h-auto w-[80vw] rounded-xl'/>
        </div>
      </div>

    </div>
  );
};

export default Products