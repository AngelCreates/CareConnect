import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="mt-8 py-10">
      <h2 className="text-3xl font-extrabold text-red-500 sm:text-4xl text-center">
        What Our Users Say
      </h2>
      {/* Testimonial cards */}
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwipe mt-10"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg border-red-600 border mx-4 py-12 hover:cursor-pointer">
            <p className="text-gray-800 mb-4 font-semibold">
              "HealthLocator saved my life! I found the nearest hospital within
              minutes when I had an emergency."
            </p>
            <p className="text-gray-600">- John Doe</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg border-red-600 border mx-4 py-12 hover:cursor-pointer">
            <p className="text-gray-800 mb-4 font-semibold">
              "I use HealthLocator for all my healthcare needs. It's so
              convenient and easy to use!"
            </p>
            <p className="text-gray-600">- Jane Smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg border-red-600 border mx-4 py-12 hover:cursor-pointer">
            <p className="text-gray-800 mb-4 font-semibold">
              "HealthLocator helped me find a nearby specialist when I needed it
              the most. Highly recommended!"
            </p>
            <p className="text-gray-600">- Michael Johnson</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg border-red-600 border mx-4 py-12 hover:cursor-pointer">
            <p className="text-gray-800 mb-4 font-semibold">
              "I was amazed by how quickly I could locate the nearest hospital
              using HealthLocator. Thank you!"
            </p>
            <p className="text-gray-600">- Emily Brown</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
