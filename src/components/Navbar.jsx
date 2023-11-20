import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-mytheme-brown-red shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white text-lg">Navbar Brand</span>
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">Home</a>
              <a href="#" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">Services</a>
              <a href="#" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">About</a>
              <a href="#" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">Contact Us</a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-white hover:text-mytheme-dark-green" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} mobile-menu`}>
        <ul className="bg-mytheme-brown-red">
          <li><a href="#" className="block text-sm px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300">Home</a></li>
          <li><a href="#services" className="block text-sm px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300">Services</a></li>
          <li><a href="#about" className="block text-sm px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300">About</a></li>
          <li><a href="#contact" className="block text-sm px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
