import React from 'react';
import leaves from '../assets/duck1.jpeg';

export default function AboutUs() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center -mx-4">
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-6xl font-bold mb-4 text-gray-800">About Us</h2> {/* Updated text color */}
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            vitae elit libero, a pharetra augue. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur et.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Sed posuere consectetur est at lobortis. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Integer posuere erat a ante
                            venenatis dapibus posuere velit aliquet.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="w-full flex-col justify-center md:w-1/3 px-4">
                        <img
                            src={leaves}
                            alt="About Us"
                            className="rounded-lg shadow-lg w-full md:w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
