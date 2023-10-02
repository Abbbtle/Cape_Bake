import React, { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import logo from '../assets/Images/Logos/cape-bake-logo_prev_ui.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#e65828] bg-opacity-100 fixed w-full top-0 z-10 md:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-32 md:w-52 h-auto"
                src= { logo }
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                  >
                  About Us
                </a>
                <a
                  href="#products"
                  className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </a>
                <a
                  href="#testimonials"
                  className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="uppercase text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Render additional desktop-specific components here */}
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
                <RiCloseLine className="block h-6 w-6" />
              ) : (
                <RiMenuLine className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              onClick={closeMenu}
              className="uppercase text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#products"
              onClick={closeMenu}
              className="uppercase text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="uppercase text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="uppercase text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;