import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Back_end_url } from '../../BackendUrl';

function Register() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
   try {
     const res = await axios.post(`${Back_end_url}/auth/register`, {
       username,
       email,
       password,
     });
     alert('Hurray! Registered Succesfully')
    res.data && navigate('/login')
   } catch (error) {
    setError(true)
    console.log(error)
   }
  }

  return (
    <div className="register">
      <span className="registerTitle">Sign Up</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && <span className='errorSpan'>Something Went Wrong!</span>}
    </div>
  );
}

export default Register