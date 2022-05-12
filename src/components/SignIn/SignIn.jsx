import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import MainContainer from '../MainContainer/MainContainer';

import './SignIn.css';

const TYPE_MESSAGE = {
  ERROR: 'error',
  SUCCESS: 'success'
};

const SignIn = ({ setLoggedin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState(TYPE_MESSAGE.ERROR);
  const [showMessage, setShowMessage] = useState(false);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password
    };

    setShowMessage(false);

    try {
      const res = await axios.post('http://localhost:8002/api/signin', data);
      const { user, token } = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
      setLoggedin(true);

      setTypeMessage(TYPE_MESSAGE.SUCCESS);
      setMessage('Successfully login');
      setShowMessage(true);
      resetForm();
      navigate('/');
    } catch (error) {
      // console.log({error})

      setTypeMessage(TYPE_MESSAGE.ERROR);
      if (error.response.data.error) {
        setMessage(error.response.data.error);
        setShowMessage(true);
      }
    }
  }

  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <h1 className='heading'>Welcome Back</h1>
        {showMessage && <p className={"message message-" + typeMessage}>{message}</p>}
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="signin-input" placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="signin-input" placeholder="Password" required />
        <div className="bottom-container">
          <button type="submit" className="signin-button">SignIn</button>
          <p>I am new here!</p>
          <Link to="/signup" className="link">Signup</Link>
        </div>
      </form>
    </MainContainer>
  )
};

export default SignIn;
