import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-8 px-10">
      <div className="container mx-auto  flex flex-col md:flex-row justify-between ">
        {/* Quick Links */}
        <div className="flex flex-col items-center  md:items-start mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm flex flex-wrap justify-center md:justify-start">
            <li className="mb-2 mr-4">
              <a
                href="#home"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-2 mr-4">
              <a
                href="#services"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#emergency"
                className="hover:text-red-500 transition-colors duration-300"
              >
                Emergency
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">123 Health Street, Cityville</p>
          <p className="text-sm">Email: Careconnect@gmail.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-xl text-red-200 hover:text-red-50 transition-colors duration-300"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="#"
              className="text-xl text-red-200 hover:text-red-50 transition-colors duration-300"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="#"
              className="text-xl text-red-200 hover:text-red-50 transition-colors duration-300"
            >
              <FaInstagramSquare />
            </a>

            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-red-50 mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Care Connect App. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">
          Made with{" "}
          <span role="img" aria-label="love">
            🤍
          </span>{" "}
          by CrashCoderz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
