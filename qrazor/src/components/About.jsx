import React from 'react';
import styled from 'styled-components';

import Img from '../assets/qr1.png';
import UseScan from '../assets/useScan.png';
import Qruse from '../assets/qruse.png';
import Smartphone from '../assets/smartphone.jpg';
import GeneratePic from '../assets/generatePic.png';


const AboutSection = styled.section`
  padding: 36px 0px 36px;
`

const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
`

const SectionTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 54px 0px 42px;
`

const SectionTitleH5 = styled.h5`
  font-size: 24px;
  font-weight: 400;
`

const SectionTitleH4 = styled.h4`
  font-size: 36px;
  color: #ff4000;
  text-transform: uppercase;
`

const DoubleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 180px;
  @media (max-width: 991.98px){
    flex-direction: column;
    margin-bottom: 60px;
  }
`

const DoubleContainerReversed = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  margin-bottom: 180px;
  @media (max-width: 991.98px){
    flex-direction: column;
    margin-bottom: 60px;
  }
`

const Half = styled.div`
  width: 50%;
  @media (max-width: 991.98px){
    width: 100%;
    margin-bottom: 30px;
  }
`

const HalfH4 = styled.h4`
  font-size: 24px;
  margin-bottom: 12px;
`

const HalfP = styled.p`
  font-size: 18px;
  margin-bottom: 6px;
`

const HalfImageContainer = styled.div`
  max-width: 250px;
  margin: 0 auto;
`

const HalfImageContainerBigger = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

const HalfImage = styled.img`
  width: 100%;
  height: 100%;
`


const About = () => {
  return(
    <AboutSection>
      <Container>
        <SectionTitle>
          <SectionTitleH5>About QR Code</SectionTitleH5>
          <SectionTitleH4>What Is a QR Code?</SectionTitleH4>
        </SectionTitle>
        <DoubleContainer>
          <Half>
            <HalfH4>What is QR code?</HalfH4>
            <HalfP>
              "QR" stands for "Quick Response", a two-dimensional successor of a bar code,
              designed to store more data than its predecessor.
            </HalfP>
            <HalfP>
              QR code was invented in 1994 by the Japanese automotive company Denso Wave,
              as a way to improve the manufacturing process of vehicles and parts.
            </HalfP>
            <HalfP>
                With the rise of smartphone technology, we are witnessing the ever growing use of QR in areas
                of marketing, advertising, commerce and even art.
            </HalfP>
          </Half>
          <Half>
            <HalfImageContainer>
              <HalfImage src={Img} alt="QR code" />
            </HalfImageContainer>
          </Half>
        </DoubleContainer>
        <DoubleContainerReversed>
          <Half>
            <HalfH4>What can QR do for me?</HalfH4>
            <HalfP>
              QR code is an easy and practical way to share your information and make it widely accessable.
            </HalfP>
            <HalfP>
              QR is perfect for sharing links to your websites, webshops and other online content.
            </HalfP>
            <HalfP>
                Give your products or services more exposure, quicky and easy, using QR code.
            </HalfP>
          </Half>
          <Half>
            <HalfImage src={UseScan} alt="how to use QR code with smartphone" />
          </Half>
        </DoubleContainerReversed>
        <DoubleContainer>
          <Half>
            <HalfH4>Where can I use QR code?</HalfH4>
            <HalfP>
              Virtually where ever you like:<br />
              Place them on your website, web shop or app.<br />
              Print them on your flyers, menus, posters and billboards.<br />
              QR code can be printed, painted or molded, either way it works.
            </HalfP>
          </Half>
          <Half>
            <HalfImageContainerBigger>
              <HalfImage src={Qruse} alt="QR code in marketing and promotions" />
            </HalfImageContainerBigger>
          </Half>
        </DoubleContainer>
        <DoubleContainerReversed>
          <Half>
            <HalfH4>How can I read QR code?</HalfH4>
            <HalfP>
              With a QR scanner app for your smartphone.<br />
              Visit Google Play Store or Apple App Store and download a QR scanner app.<br />
              Most of them are free to use.<br />
              Some smartphones have built-in capability of reading QR code, just open your camera app and point your
              smartphone towards the QR code.
            </HalfP>
          </Half>
          <Half>
            <HalfImageContainer>
              <HalfImage src={Smartphone} alt="QR code smartphone scanner app" />
            </HalfImageContainer>
          </Half>
        </DoubleContainerReversed>
        <DoubleContainer>
          <Half>
            <HalfH4>How can I use QRazor?</HalfH4>
            <HalfP>
              Simple,<br />
              1. Copy and paste your link or text to area marked as "Enter Link or Text".<br />
              2. Click GENERATE QR button to get your QR code.<br />
              3. Download your QR code by clicking DOWNLOAD QR button and use it.
            </HalfP>
            <HalfP>
              Explore more creative ideas on how you can benefit with QR code.
            </HalfP>
          </Half>
          <Half>
            <HalfImageContainer>
              <HalfImage src={GeneratePic} alt="QR code smartphone app" />
            </HalfImageContainer>
          </Half>
        </DoubleContainer>
      </Container>
    </AboutSection>
  );
}

export default About;
