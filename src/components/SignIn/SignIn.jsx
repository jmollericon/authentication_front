import React from 'react';
import { Link } from 'react-router-dom';

import MainContainer from '../MainContainer/MainContainer';

import './SignIn.css';

const SignIn = props => {
  return (
    <MainContainer>
      <h1 className='heading'>Welcome Back</h1>
      <input type="email" name="" id="" className="signin-input" placeholder="Email" />
      <input type="password" name="" id="" className="signin-input" placeholder="Password" />
      <div className="bottom-container">
        <button type="button" className="signin-button">SignIn</button>
        <p>I am new here!</p>
        <Link to="/signup" className="link">Signup</Link>
      </div>
    </MainContainer>
  )
};

export default SignIn;