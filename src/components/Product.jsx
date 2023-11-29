import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { imageSrc, productName, productPrice, description, buttonText } = product;

    return (
        <section className='mt-10'>
            <Navbar />
            <div className="mx-auto min-h-screen min max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 rounded-r">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt={productName}
                                src={imageSrc}
                                className="absolute rounded inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100 rounded-r">
                        <span
                            className="hidden lg:rounded-l lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-5xl">
                                {productName}
                            </h2>

                            <p className="mt-2 text-gray-600 font-bold text-xl">
                                ${productPrice}
                            </p>

                            <p className="mt-4 text-gray-600">
                                {description}
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-mytheme-lighter-green bg-mytheme-lighter-green px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-mytheme-lighter-green focus:outline-none focus:ring active:text-mytheme-lighter-green"
                            >
                                {buttonText}
                            </a>

                            <Link
                                to="/products"
                                className="mt-4 ml-4 inline-block rounded borde bg-mytheme-lighter-brown px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-mytheme-lighter-green focus:outline-none focus:ring active:text-mytheme-lighter-green"
                            >
                                Go back to products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Product;
