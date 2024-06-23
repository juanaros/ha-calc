import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return (
    <nav className="bg-blue-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
            VigaPro <span><i class="fa-solid fa-calculator"></i></span>
            
        </Link>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
            </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? "block" : "hidden"} space-y-4 md:space-y-0`}>
            <Link to="/login" className="text-white hover:text-gray-200 block md:inline-block">
            Login
            </Link>
            <Link to="/register" className="text-white hover:text-gray-200 block md:inline-block">
            Register
            </Link>
        </div>
        </div>
    </nav>
    );
};

export default Navbar;
