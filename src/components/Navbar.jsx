import React, { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import logo from '../assets/Images/Logos/cape-bake-logo_prev_ui.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav name="home" className="bg-[#e65828] bg-opacity-100 fixed w-full top-0 z-10 md:py-2 cursor-pointer">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link to="hero" smooth={true} duration={500}>
              <img
                className="w-36 md:w-52 h-auto"
                src= { logo }
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-baseline space-x-4 ml-10">
            <Link
              to="about"
              smooth={true} duration={500}
              className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="products"
              smooth={true} duration={500}
              className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
            <Link
              to="testimonials"
              smooth={true} duration={500}
              className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              smooth={true} duration={500}
              className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden -mr-2">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <RiCloseLine className="block h-6 w-6 text-white" />
            ) : (
              <RiMenuLine className="block h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="about"
              smooth={true} duration={500}
              onClick={closeMenu}
              className="uppercase text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="products"
              smooth={true} duration={500}
              onClick={closeMenu}
              className="uppercase text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </Link>
            <Link
              to="testimonials"
              smooth={true} duration={500}
              onClick={closeMenu}
              className="uppercase text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              smooth={true} duration={500}
              onClick={closeMenu}
              className="uppercase text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
