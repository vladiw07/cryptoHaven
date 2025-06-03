import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import background from '../assets/images/backgroundImage.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat font-poppins px-4 sm:px-8 md:px-16 lg:px-32 py-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4 md:p-6 text-white relative z-30">
          <div className="text-[18px] sm:text-[20px] font-medium">CryptoHaven</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex text-[18px] space-x-8">
            <a href="#" className="hover:text-gray-300 flex items-center gap-1 group">
              Home 
            </a>
            <a href="#" className="hover:text-gray-300 flex items-center gap-1 group">
              How we work
            </a>
            <a href="#" className="hover:text-gray-300 flex items-center gap-1 group">
              About us
            </a>
            <a href="#" className="hover:text-gray-300 flex items-center gap-1 group">
              FAQ
            </a>
          </div>
          
          {/* Desktop CTA Button */}
          <button className="hidden md:block px-4 py-1 bg-white text-black text-[18px] rounded-xl relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Sign in</span>
            <span className="absolute inset-0 bg-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
          
          {/* Mobile Hamburger Menu */}
          <button 
            className="md:hidden text-white text-2xl focus:outline-none relative z-30"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Navigation Fullscreen */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black z-20 flex flex-col pt-20">
            <div className="flex flex-col space-y-2 text-white text-[22px] px-4">
              <a href="#" className="hover:text-gray-300 py-3 border-b border-gray-700">
                Home
              </a>
              <a href="#" className="hover:text-gray-300 py-3 border-b border-gray-700">
                How we work
              </a>
              <a href="#" className="hover:text-gray-300 py-3 border-b border-gray-700">
                About us
              </a>
              <a href="#" className="hover:text-gray-300 py-3 border-b border-gray-700">
                FAQ
              </a>
              
              <button className="self-center mt-6 px-3 py-2 bg-white text-black text-[18px] rounded-xl relative overflow-hidden group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Sign in</span>
                <span className="absolute inset-0 bg-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
        )}

        {/* Hero Content - Centered */}
        <div className={`flex-grow flex flex-col mt-40 justify-center items-center text-center px-2 sm:px-6 mx-auto text-white ${isMenuOpen ? 'hidden md:flex' : 'flex'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 leading-[1.1]">
            Crypto Market that is <br />
            just out of this world
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] mb-6 md:mb-8 max-w-2xl">
            Maximize your crypto potential with a wallet designed for speed, security, and simplicity.
          </p>
          <button className="px-3 py-2 bg-white text-black text-[18px] rounded-2xl relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Take off!</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;