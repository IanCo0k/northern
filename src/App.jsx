import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='w-full flex-col justify-center'>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <Footer />
    </div>
  )
}
