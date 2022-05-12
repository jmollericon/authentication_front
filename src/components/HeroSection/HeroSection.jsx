import React from 'react'

import MainContainer from '../MainContainer/MainContainer';
import Heading from '../Heading/Heading';
import CTA from '../CTA/CTA';

import './HeroSection.css';

const HeroSection = ({ loggedin, user }) => {
  return (
    <MainContainer>
      <Heading>Plan your day with <strong> - liTask</strong></Heading>
      {loggedin && <b className="welcome-message">Welcome {user.firstname} {user.lastname}</b>}
      {!loggedin && <CTA target='/signup'>Start Now</CTA>}
    </MainContainer>
  )
}

export default HeroSection;
