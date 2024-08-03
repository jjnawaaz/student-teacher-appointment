import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "../components/AdminLogin";
import TeacherLogin from "../components/TeacherLogin";
import StudentLogin from "../components/StudentLogin";
import TeacherSignUp from "../components/TeacherSignUp";
import StudentSignUp from "../components/StudentSignUp";

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
          <AdminLogin />
          <TeacherLogin />
          <StudentLogin />
          <button className="home-button" onClick={handleButtonClick}>
            SignUp?
          </button>
        </div>
      ) : (
        <div className="homepage">
          <TeacherSignUp />
          <StudentSignUp />
          <button className="home-button" onClick={handleButtonClick}>
            Already Have an Account? Login
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
