import { Link } from 'react-router-dom';
import './login.css';
import React, { useContext, useRef, useState } from 'react'
import { Context } from '../../Context/Context';
import axios from 'axios';
import { Back_end_url } from '../../BackendUrl';

function Login() {

  const userRef = useRef();
  const passRef = useRef();
  const {dispatch, isFetching } = useContext(Context);
  const [error,setError] = useState(null)

  async function  handleSubmit (e){
    e.preventDefault();
    dispatch({ type:'LOGIN_START'});
    try {
      const response = await axios.post(`${Back_end_url}/auth/login`,{
        username: userRef.current.value,
        password: passRef.current.value
      })
      dispatch({ type:"LOGIN_SUCCESS", payload: response.data});
    } catch (error) {
       dispatch({ type:"LOGIN_FAILURE"});
       setError('Invalid credentials please try again..')
    }
  }


  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Username.."
          className="loginInput"
          ref={userRef}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="loginInput"
          ref={passRef}
          required
        />
        <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
      </form>
      {error && <div className='loginError'>{error}</div>}
      <button className="loginRegisterButton">
        <Link to='/register' className='link'>Register</Link>
      </button>
    </div>
  );
}

export default Login