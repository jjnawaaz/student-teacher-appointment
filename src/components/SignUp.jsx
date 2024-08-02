import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="homepage">
      <div className="signup-form">Signup as Teacher</div>
      <div className="signup-form">Signup as Student</div>
      <button className="signup-form-button" onClick={handleButtonClick}>
        Already Have an Account?
      </button>
    </div>
  );
};

export default SignUp;
