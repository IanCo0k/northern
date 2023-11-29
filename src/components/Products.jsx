import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import productData from '../data/products'; // Import productData

const Products = () => {
    const topProducts = productData.slice(0, 4); // Get the top 4 products

    return (
        <section className="text-white bg-mytheme-dark-brown">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-3xl font-bold sm:text-6xl">Product Collection</h2>
                    <p className="max-w-md mx-auto mt-4">View our products here!</p>
                </header>

                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    {topProducts.map((product, index) => (
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

                <div className="flex justify-center mt-8">
                    <Link to="/products" className="bg-mytheme-lighter-green text-white text-xl p-3 rounded">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;
