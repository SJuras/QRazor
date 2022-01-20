import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../assets/pageHeroBg2.png';

import { FaChevronDown } from "react-icons/fa";


const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: cover;
  position: relative;
`

const ContainerTwo = styled.div`
  max-width: 70%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const HeroInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 0px 16px;
  position: relative;
`
const Generator = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 990;
  box-shadow: 0px 6px 12px rgba(0,0,0,0.4);
`

const ScrollDownContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`

const ScrollDownContainerPara = styled.p`

`


const HomeHero = () => {
  return(
    <HeroSection>
      <ContainerTwo>
        <HeroInner>
          <Generator></Generator>
          <ScrollDownContainer>
            <ScrollDownContainerPara>Scroll down to learn more</ScrollDownContainerPara>
            <FaChevronDown />
          </ScrollDownContainer>
        </HeroInner>
      </ContainerTwo>
    </HeroSection>
  );
}

export default HomeHero;
