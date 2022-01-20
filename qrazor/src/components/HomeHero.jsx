import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode';

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

const GeneratorLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GeneratorRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GeneratorLeftTextArea = styled.textarea`
  width: 80%;
  height: 200px;
  resize: none;
  padding: 18px;
  font-size: 18px;
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

const QRImageContainer = styled.div`
  width: 80%;
  height: auto;
  background-color: #fff;
`

const QRImage = styled.img`
  width: 100%;
  height: 100%;
`

const GenerateButton = styled.button`
  width: 250px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 24px;
  padding: 12px 0;
  background-color: #ff4000;
  color: #fff;
  font-size: 18px;
  border: 0.5px solid #ff4000;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #4f78de;
    border-color: #4f78de;
`


const HomeHero = () => {

  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch(error){
      console.log(error);
    }
  }

  return(
    <HeroSection>
      <ContainerTwo>
        <HeroInner>
          <Generator>
            <GeneratorLeft>
              <GeneratorLeftTextArea placeholder="Enter link or text here... " onChange={(e) => setText(e.target.value)}></GeneratorLeftTextArea>
              <GenerateButton onClick={() => generateQrCode()}>GENERATE QR</GenerateButton>
            </GeneratorLeft>
            <GeneratorRight>
              <QRImageContainer>
                {
                  imageUrl ? (<a href={imageUrl} download><QRImage src={imageUrl} alt="qr image" /></a>) : null
                }
              </QRImageContainer>
            </GeneratorRight>
          </Generator>
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
