import React from "react";
import Template from "../components/Template";
// import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Enhance Healthcare Access Today, Tomorrow, and Beyond"
      image=""
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
