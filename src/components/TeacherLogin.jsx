import React from "react";

const TeacherLogin = () => {
  return (
    <div class="login-box">
      <h2>Teacher Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default TeacherLogin;
