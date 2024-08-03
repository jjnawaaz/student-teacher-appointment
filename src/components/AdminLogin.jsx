import React from "react";

const AdminLogin = () => {
  return (
    <div class="login-box">
      <h2>Admin Login</h2>
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

export default AdminLogin;
