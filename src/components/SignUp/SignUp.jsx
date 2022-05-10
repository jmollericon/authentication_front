import React from 'react';
import { Link } from 'react-router-dom';

import MainContainer from '../MainContainer/MainContainer';

import './SignUp.css';

const SignUp = props => {
  return (
    <MainContainer>
      <h1 className='heading'>Create a New Account<br /><strong> It is Free</strong></h1>
      <input type="text" name="" id="" className="signup-input" placeholder="First name" />
      <input type="text" name="" id="" className="signup-input" placeholder="Last name" />
      <input type="email" name="" id="" className="signup-input" placeholder="Email" />
      <input type="password" name="" id="" className="signup-input" placeholder="Password" />
      <input type="password" name="" id="" className="signup-input" placeholder="Confirm password" />
      <div className="bottom-container">
        <button type="button" className="signup-button">Signup</button>
        <p>I already have an account!</p>
        <Link to="/signin" className="link">Signin</Link>
      </div>
    </MainContainer>
  )
};

export default SignUp;