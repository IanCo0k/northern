import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { AiOutlineHome, AiOutlineShopping, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Use GSAP to animate the mobile menu
    if (!isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, { height: "auto", duration: 0.5, ease: "power2.inOut" });
    } else {
      gsap.to(mobileMenuRef.current, { height: 0, duration: 0.5, ease: "power2.inOut" });
    }
  };

  return (
    <nav className="bg-mytheme-brown-red shadow-lg rounded-lg mx-4 my-2 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="inline-block w-10 mr-2" />
                <span className="font-semibold text-white text-lg">Northern Mallard</span>
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">
                <AiOutlineHome className="inline-block text-lg" /> Home
              </Link>
              <Link to="/products" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">
                <AiOutlineShopping className="inline-block text-lg" /> Products
              </Link>
              <Link to="/about" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">
                <AiOutlineUser className="inline-block text-lg" /> About
              </Link>
              <Link to="/contact" className="py-4 px-2 text-white font-semibold hover:text-mytheme-dark-green transition duration-300">
                <AiOutlineMail className="inline-block text-lg" /> Contact
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
              <svg className={`w-6 h-6 text-white hover:text-mytheme-dark-green ${isMobileMenuOpen ? "open" : "closed"}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="mobile-menu" style={{ height: 0, overflow: "hidden", transition: "height 0.5s ease" }}>
        <ul className="bg-mytheme-brown-red">
          <li>
            <Link to="/" className="block text-center text-2xl font-bold px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300 bg-mytheme-brown-red-darker">
              <AiOutlineHome className="inline-block text-lg" /> Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="block text-center text-2xl font-bold px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300 bg-mytheme-brown-red-dark">
              <AiOutlineShopping className="inline-block text-lg" /> Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-center text-2xl font-bold px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300 bg-mytheme-brown-red-darkest">
              <AiOutlineUser className="inline-block text-lg" /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block text-center text-2xl font-bold px-2 py-4 text-white hover:text-mytheme-dark-green transition duration-300 bg-mytheme-brown-red-darkest">
              <AiOutlineMail className="inline-block text-lg" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
