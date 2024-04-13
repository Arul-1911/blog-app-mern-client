import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

function register() {
  return (
    <div className="register">
      <span className="registerTitle">Sign Up</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="registerInput"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="registerInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="registerInput"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to='/login' className='link'>Login</Link>
      </button>
    </div>
  );
}

export default register