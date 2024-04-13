import React from "react";
import Btn from "./Btn";

const Services = () => {
  return (
    <div className="bg-red-400">
      {/* Introduction to Services */}
      <div className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-6">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-600">
            <b>
              Dedicated to providing the best healthcare services, our platform
              connects you with the nearest and most available hospitals and
              doctors, ensuring rapid response during emergencies and access to
              quality healthcare at all times.
            </b>
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Emergency Services */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Emergency Services
              </h3>
              <p className="text-gray-600">
                Quick access to emergency healthcare is crucial. Our real-time
                tracking system helps you locate the nearest medical facilities
                available to handle urgent health situations.
              </p>
            </div>
          </div>

          {/* Regular Health Check-ups */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Regular Health Check-ups
              </h3>
              <p className="text-gray-600">
                Maintain your health with regular check-ups. Book appointments
                with top doctors and specialists in your area for routine
                examinations and health monitoring.
              </p>
            </div>
          </div>

          {/* Online Consultations */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Online Consultations
              </h3>
              <p className="text-gray-600">
                Consult with healthcare professionals from the comfort of your
                home. Our platform offers secure and convenient online
                consultations with certified doctors.
              </p>
            </div>
          </div>

          {/* Pharmacy Services */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                Pharmacy Services
              </h3>
              <p className="text-gray-600">
                Need medication? Order prescriptions online and have them
                delivered to your doorstep. We ensure fast and reliable pharmacy
                services.
              </p>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                Subscription Plans
              </h3>
              <p className="text-gray-600">
                Join our subscription plans for exclusive benefits, discounts on
                services, and priority access to health check-ups and
                consultations.
              </p>
            </div>
          </div>

          {/* User Testimonials */}
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">
                What Our Users Say
              </h3>
              <p className="text-gray-600 italic">
                "Thanks to this app, I was able to get emergency care promptly
                when I needed it the most. It's reassuring to know that help is
                just a few clicks away." - Jane Doe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-red-500 mb-3">
            Ready to get started?
          </h3>
          <p className="text-red-500 mb-6">
            Sign up now to access immediate healthcare services for you and your
            family.
          </p>
          <Btn text={"Join Now"} href={"join"} />
        </div>
      </div>
    </div>
  );
};

export default Services;
