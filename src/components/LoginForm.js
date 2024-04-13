import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-red-500 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-richblack-900">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email Address"
          name="email"
          className="bg-red-400 rounded-[0.5rem] text-white placeholder:text-white  w-full p-[12px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-red-500 mb-1 leading-[1.375rem]">
          Password<sup className="text-richblack-900">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="bg-red-400 rounded-[0.5rem] text-white placeholder:text-white  w-full p-[12px]"
        />

        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#fff" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#fff" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-richblack-500 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>

      <button className="bg-red-600 font-medium rounded-[8px] text-white px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
