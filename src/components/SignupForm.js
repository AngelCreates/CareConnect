import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log("printing account data ");
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-Instructor tab */}
      <div className="flex bg-red-400 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "Patient"
              ? " bg-white text-red-500"
              : "bg-transparaent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Patient")}
        >
          Patient
        </button>
        <button
          className={`${
            accountType === "Doctor"
              ? "bg-white text-red-500"
              : "bg-transparaent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Doctor")}
        >
          Doctor
        </button>
      </div>

      <form className="flex flex-col gap-y-4 mt-6" onSubmit={submitHandler}>
        {/* first name and lastName */}
        <div className="flex justify-between mt-4">
          <label>
            <p className="text-[0.875rem] text-red-500 mb-1 leading-[1.375rem]">
              First Name<sup className="text-richblack-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-red-400 rounded-[0.5rem] text-white placeholder:text-white   w-full p-[12px]"
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-red-500 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-richblack-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-red-400 rounded-[0.5rem] text-richblack-5 placeholder:text-white w-full p-[12px]"
            />
          </label>
        </div>

        {/* email Add */}
        <div className="mt-4">
          <label className="w-full mt-4">
            <p className="text-[0.875rem] text-red-500 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-richblack-900">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address "
              value={formData.email}
              className="bg-red-400 rounded-[0.5rem] text-white placeholder:text-white w-full p-[12px]"
            />
          </label>
        </div>

        {/* createPassword and Confirm Password */}
        <div className="flex justify-between mt-4">
          <label className=" relative">
            <p className="text-[0.875rem] text-red-500 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-richblack-900">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-red-400 rounded-[0.5rem] text-white placeholder:text-white w-full p-[12px]"
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
          </label>

          <label className=" relative">
            <p className="text-[0.875rem] text-red-500 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-richblack-900">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-red-400 rounded-[0.5rem] text-white placeholder:text-white w-full p-[12px]"
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
          </label>
        </div>
        <button className=" w-full bg-red-600 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
