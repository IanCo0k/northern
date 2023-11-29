import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const HeroSection = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 rounded-r">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt="Nature"
                                src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww"
                                className="absolute rounded inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100 rounded-r">
                        <span
                            className="hidden lg:rounded-l lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-4xl font-bold md:text-7xl">
                                Northern Mallard Supply Co.
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Northern Mallard Supply Co. in Mt. Pleasant, Michigan, is your destination for carefully curated thrifted fashion. We're passionate about style and thrifting, offering a handpicked collection of unique clothing. Explore our finds and uncover fashion treasures with character.
                            </p>

                            <div className="flex flex-wrap justify-center mt-8">
                                <Link
                                    to="/products"
                                    className="mt-4 mx-2 inline-block rounded border bg-mytheme-lighter-green px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-mytheme-lighter-green focus:outline-none focus:ring active:text-mytheme-lighter-green"
                                >
                                    Explore our collection
                                </Link>
                                <Link
                                    to="/contact"
                                    className="mt-4 mx-2 inline-block rounded border bg-mytheme-lighter-brown px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-mytheme-lighter-green focus:outline-none focus:ring active:text-mytheme-lighter-green"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
