import React from "react";

const Btn = ({ text, path }) => {
  return (
    <a
      path={`${path}`}
      className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-red-600 rounded-full hover:bg-white group border border-white hover:cursor-pointer"
    >
      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-red-600">
        {text}
      </span>
    </a>
  );
};

export default Btn;
