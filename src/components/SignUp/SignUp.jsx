import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MainContainer from '../MainContainer/MainContainer';

import './SignUp.css';

const TYPE_MESSAGE = {
  ERROR: 'error',
  SUCCESS: 'success'
};

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [typeMessage, setTypeMessage] = useState(TYPE_MESSAGE.ERROR);
  const [showMessage, setShowMessage] = useState(false);

  const resetForm = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      password
    };

    if (password !== confirm_password) {
      setMessage('Las constraseñas deben coincidir.');
      setShowMessage(true);
      return;
    }
    setShowMessage(false);

    try {
      const { data: response } = await axios.post('http://localhost:8002/api/signup', data);
      console.log({ response });

      setTypeMessage(TYPE_MESSAGE.SUCCESS);
      setMessage('User registered successfully');
      setShowMessage(true);
      resetForm();
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
        <h1 className="heading">Create a New Account<br /><strong> It is Free</strong></h1>
        {showMessage && <p className={"message message-" + typeMessage}>{message}</p>}
        <input type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} className="signup-input" placeholder="First name" required />
        <input type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)} className="signup-input" placeholder="Last name" required />
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="signup-input" placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="signup-input" placeholder="Password" required />
        <input type="password" name="confirm_password" value={confirm_password} onChange={e => setConfirmPassword(e.target.value)} className="signup-input" placeholder="Confirm password" required />
        <div className="bottom-container">
          <button type="submit" className="signup-button">SignUp</button>
          <p>I already have an account!</p>
          <Link to="/signin" className="link">Signin</Link>
        </div>
      </form>
    </MainContainer>
  )
};

export default SignUp;
