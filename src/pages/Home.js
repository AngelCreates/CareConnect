import React from 'react'

const Home = () => {
  return (
    <div className="container mx-auto bg-transparent bg-red-200">
      <div className="text-center w-[100vw] h-[80vh] border-2 border-red-500 bg-cover bg-center bg-no-repeat bg-fixed herobg ">
        <h1 className="text-4xl font-bold mb-4">Welcome to Care Connect</h1>
        <p className="text-lg text-gray-700 mb-8">Your go-to platform for accessing healthcare services</p>
        {/* Search bar */}
        <div className="mb-8">
          <input type="text" placeholder="Enter your location..." className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500" />
          {/* Add search button if needed */}
        </div>
        {/* Quick links */}
        <div className="flex justify-center space-x-4">
          <a href="/emergency" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Emergency Services</a>
          <a href="/services" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Find Services</a>
        </div>
      </div>
      {/* Testimonials section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Testimonial cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">"HealthLocator saved my life! I found the nearest hospital within minutes when I had an emergency."</p>
            <p className="text-gray-600">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 mb-4">"I use HealthLocator for all my healthcare needs. It's so convenient and easy to use!"</p>
            <p className="text-gray-600">- Jane Smith</p>
          </div>
          {/* Add more testimonials */}
        </div>
      </div>
    </div>
  )
}

export default Home
