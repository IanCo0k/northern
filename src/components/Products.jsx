import React from 'react';
import levis from '../assets/levis1.jpeg';
import green from '../assets/green-pants1.jpeg';
import red from '../assets/red-shirt.jpeg';

export default function Products() {
    return (
        <div className="bg-mytheme-brown-red py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Our Products
                    </h2>
                    <p className="mt-2 text-xl text-gray-200">
                        Check out our amazing collection of products.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Product 1 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Product 1
                                </h3>
                                <img
                                    src={levis}
                                    alt="Product 1"
                                    className="mt-4 rounded-lg"
                                />
                                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer nec odio. Praesent libero.
                                </p>
                                <div className="mt-4">
                                    <a
                                        href="#"
                                        className="text-base font-medium text-mytheme-brown-red hover:text-mytheme-brown-red"
                                    >
                                        Learn more &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Product 2
                                </h3>
                                <img
                                    src={green}
                                    alt="Product 2"
                                    className="mt-4 rounded-lg"
                                />
                                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer nec odio. Praesent libero.
                                </p>
                                <div className="mt-4">
                                    <a
                                        href="#"
                                        className="text-base font-medium text-mytheme-brown-red hover:text-mytheme-brown-red"
                                    >
                                        Learn more &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Product 3
                                </h3>
                                <img
                                    src={red}
                                    alt="Product 3"
                                    className="mt-4 rounded-lg"
                                />
                                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer nec odio. Praesent libero.
                                </p>
                                <div className="mt-4">
                                    <a
                                        href="#"
                                        className="text-base font-medium text-mytheme-brown-red hover:text-mytheme-brown-red"
                                    >
                                        Learn more &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
