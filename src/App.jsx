import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='w-full flex-col mt-10 justify-center'>
      <Navbar />
      <Hero />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}
