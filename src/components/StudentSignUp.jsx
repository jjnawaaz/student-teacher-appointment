import React from "react";

const StudentSignUp = () => {
  return (
    <div class="login-box">
      <h2>Sign Up As Student</h2>
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
          <label>Roll No</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default StudentSignUp;
