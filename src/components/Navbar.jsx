import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 mx-auto">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-8 md:h-[4vw] w-auto"
          loading="lazy"
        />
      </Link>

      {/* Responsive Navigation Menu */}
      <div className="hidden sm:block">
        <nav>
          <ul className="flex gap-x-8 text-lg text-red-500">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Menu Icon (shown on smaller screens) */}
      <div className="sm:hidden">
        {/* Icon component or image can go here */}
        {/* You can add functionality to toggle a dropdown menu */}
      </div>

      {/* Responsive Login/Signup/Logout/Dashboard Buttons */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="bg-red-500 hover:bg-white hover:text-red-500 text-white py-2 px-4 rounded-md border-2 border-transparent hover:border-red-500 transition-colors duration-200 text-sm sm:text-base">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-500 hover:bg-white hover:text-red-500 text-white py-2 px-4 rounded-md border-2 border-transparent hover:border-red-500 transition-colors duration-200 text-sm sm:text-base">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="bg-red-500 text-white py-2 px-4 rounded-md border border-richblack-700 text-sm sm:text-base"
              >
                Log Out
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="bg-red-500 text-white py-2 px-4 rounded-md border border-richblack-700 text-sm sm:text-base">
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
