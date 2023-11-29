import React from 'react'
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-mytheme-brown-red text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={logo} alt="Logo" className="w-12 mr-2" />
                    <span className="text-xl font-bold">Northern Mallard</span>
                </div>
            </div>
        </footer>
    );
}
