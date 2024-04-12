import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-red-100 text-gray-700">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-3 md:py-5">

                    <a href="#home" className="text-lg font-bold">
                       <img src={logo} alt='logo' width={150}/>
                    </a>


                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Primary Nav */}
                    <div className={`md:flex items-center space-x-12 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <a href="#home" className="block py-2 px-4 text-xl hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:p-0">Home</a>
                        <a href="#about" className="block py-2 px-4 text-xl hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:p-0">About</a>
                        <a href="#services" className="block py-2 px-4 text-xl hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:p-0">Services</a>
                    </div>

                    {/* Emergency button */}
                    <div>
                        <button className="hidden md:block px-5 py-2 text-xl bg-white border-red-400 border-4 hover:border-red-700 hover:text-red-700 text-red-400 rounded-xl transition duration-300">
                            Emergency
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Emergency Button */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-red-500 text-center`}>
                <button className="w-full py-3 hover:bg-red-600 text-white rounded transition duration-300">
                    Emergency
                </button>
            </div>
        </nav>
    );
};

export default Navbar;