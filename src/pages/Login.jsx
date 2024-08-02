import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <label>Email</label>
          <div className="error-label">
            <input
              type="email"
              className="i-inputs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label>Password</label>
          <div className="error-label">
            <input
              type="password"
              className="i-inputs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="i-inputs-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
