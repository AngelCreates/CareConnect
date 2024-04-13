import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="CareConnect: Your Instant Healthcare Connection"
      desc1="Connect with Nearby Hospitals and Services Instantly!"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
