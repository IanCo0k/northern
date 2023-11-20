import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-mytheme-brown-red text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="logo.png" alt="Logo" className="w-8 mr-2" />
                    <span className="text-xl font-bold">Northern Mallard</span>
                </div>
                <nav className="flex flex-wrap justify-center">
                    <a href="#" className="text-gray-300 hover:text-white px-4 py-2">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white px-4 py-2">About</a>
                    <a href="#" className="text-gray-300 hover:text-white px-4 py-2">Services</a>
                    <a href="#" className="text-gray-300 hover:text-white px-4 py-2">Contact</a>
                </nav>
            </div>
        </footer>
    );
}
