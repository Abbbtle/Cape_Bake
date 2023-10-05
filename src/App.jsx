import { useState } from 'react'
import './index.css'
import { Navbar, Hero, About, Products, Testimonials, Contact, Footer } from './components';
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <div className='bg-white'>
        <Navbar/>
        <Hero/>
        <About/>
        <Products/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App
