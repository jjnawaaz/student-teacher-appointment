import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      {isLogin ? (
        <div className="homepage">
          <div className="form">SignIn as Admin</div>
          <div className="form">SignIn as Teacher</div>
          <div className="form">SignIn as Student</div>
          <button className="form-button" onClick={handleButtonClick}>
            Already Have an Account? Login
          </button>
        </div>
      ) : (
        <div className="homepage">
          <div className="form">Signup as Teacher</div>
          <div className="form">Signup as Student</div>
          <button className="form-button" onClick={handleButtonClick}>
            Signup as newbie
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
