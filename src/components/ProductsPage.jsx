import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import productData from '../data/products'; // Import productData
import Navbar from './Navbar';
import Footer from './Footer';

const ProductsPage = () => {
  return (
    <section className="text-white pt-12 bg-mytheme-dark-brown">
        <Navbar />
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold sm:text-6xl">Product Collection</h2>
          <p className="max-w-md mx-auto mt-4">Tap on each product to learn more :)</p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {productData.map((product, index) => (
            <li key={index}>
              {/* Wrap the product image and info with Link */}
              <Link to={`/product/${product.productName}`} className="block overflow-hidden group">
                <img
                  src={product.imageSrc}
                  alt={product.productName}
                  className="h-[350px] w-full object-cover rounded transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative p-3 bg-mytheme-lighter-green text-black">
                  <h3 className="text-xl text-white group-hover:underline group-hover:underline-offset-4">
                    {product.productName}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only">Regular Price</span>
                    <span className="tracking-wider text-white">${product.productPrice.toFixed(2)} USD</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
        <Footer />
    </section>
  );
};

export default ProductsPage;
