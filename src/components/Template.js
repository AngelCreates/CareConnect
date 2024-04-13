import React from "react";
// import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-red-600 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.25rem] leading-[1.625rem] mt-4">
          <span className="text-red-400">{desc1}</span>
          <br />
          <span className="text-red-400 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full item-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-100"></div>
          <p className="text-richblack-700 leading-[.075rem] font-medium">OR</p>
          <div className="w-full h-[1px] bg-richblack-100"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-red-500 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12  flex justify-center items-center  ">
        {/* <img
          src={frameImage}
          alt="Pattern"
          // width={558}
          // height={204}
          loading="lazy"
        /> */}

        <img
          src="https://img.freepik.com/free-photo/healthcare-concept-device-screen_53876-124050.jpg?t=st=1712957965~exp=1712961565~hmac=1e3736308d978fdc1f2fd2a2aabafe8259bbd4f3c89ddf9a115fd4048a33856b&w=996"
          alt="Students"
          loading="lazy"
          className=" top-5 right-4 rounded-md h-[70vh]"
        />
      </div>
    </div>
  );
};

export default Template;
