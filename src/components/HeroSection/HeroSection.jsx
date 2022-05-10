import React from 'react'

import MainContainer from '../MainContainer/MainContainer';
import Heading from '../Heading/Heading';
import CTA from '../CTA/CTA';

const HeroSection = () => {
  return (
    <MainContainer>
      <Heading>Plan your day with <strong> - liTask</strong></Heading>
      <CTA target='/signup'>Start Now</CTA>
    </MainContainer>
  )
}

export default HeroSection;
