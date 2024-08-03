import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherSignUp = () => {
  return (
    <div class="login-box">
      <h2>Sign Up As Teacher</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Teacher ID</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TeacherSignUp;
