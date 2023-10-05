import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import various from '../assets/Images/Images/various-cakes.jpg';

const breads = [
  {
    id: 'loaf',
    name: 'Brown / White Loaf',
    price: 'R13.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'buns',
    name: 'Buns',
    price: 'R19.99',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'banana',
    name: 'Banana Loaf',
    price: 'R13.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'french',
    name: 'French Bun',
    price: 'R19.99',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const cakes = [
  {
    id: 'red',
    name: 'Read Velvet Cake',
    price: 'R79.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'carrot',
    name: 'Carrot Cake',
    price: 'R79.99',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'chocolate',
    name: 'Chocolate cake',
    price: 'R79.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'cheese',
    name: 'Cheese Cake',
    price: 'R79.99',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const baked = [
  {
    id: 'milk',
    name: 'Milk Tart',
    price: 'R29.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'ginger',
    name: 'Ginger Cookies',
    price: 'R29.99',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'muffins',
    name: 'Chocolate / Vanilla Muffins',
    price: 'R29.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'ginger',
    name: 'Ginger Cookies',
    price: 'R29.99',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

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

      <div className=''>
        <h2 className='text-center text-black text-8xl font-bold pt-10'>Products</h2>

        <div className="max-w-screen-xl mx-auto p-4">
  <h2 className="text-2xl font-bold mb-4">Breads Slider</h2>
  <Slider {...settings}>
    {breads.map((product) => (
      <div key={product.id} className="p-4">
        {/* Product details */}
      </div>
    ))}
  </Slider>

  <h2 className="text-2xl font-bold mb-4">Cakes Slider</h2>
  <Slider {...settings}>
    {cakes.map((product) => (
      <div key={product.id} className="p-4">
        {/* Product details */}
      </div>
    ))}
  </Slider>

  <h2 className="text-2xl font-bold mb-4">Baked Goods Slider</h2>
  <Slider {...settings}>
    {baked.map((product) => (
      <div key={product.id} className="p-4">
        {/* Product details */}
      </div>
    ))}
  </Slider>
</div>


        {/* Row 1 */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Products