import React from "react";
import Btn from "../components/Btn";
import About from "./About";

const Home = () => {
  return (
    <div className="w-[100vw] bg-transparent bg-red-200">
      <div className="text-center w-[100vw] h-[80vh] flex flex-col justify-center  bg-center bg-no-repeat bg-fixed herobg text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-red-100">Care Connect</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Your go-to platform for accessing healthcare services
        </p>
        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter your location..."
            className="w-8/12 p-4 rounded-full bg-gray-50 border-2 border-red-300 focus:outline-none focus:border-red-500 focus:bg-red-50 text-gray-900 font-medium px-5"
          />
          {/* Add search button if needed */}
        </div>
        {/* Quick links */}
        <div className="flex justify-center space-x-4">
          {/* <a href="/emergency" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Emergency Services</a> */}
          <Btn text={"Find Hospitals"} path={"/hospital"} />
          <Btn text={"Book Appointments"} isDisabled={true} />
          {/* <a href="/services" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Find Services</a> */}
        </div>
      </div>
      {/* Testimonials section */}

      <About />
    </div>
  );
};

export default Home;
