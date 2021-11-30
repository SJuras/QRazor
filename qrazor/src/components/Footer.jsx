import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const FooterContainer = styled.div`
  padding: 30px 0px;
  background-color: #19222d;
`

const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
`

const FooterRow = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 36px;
  @media (max-width:1145px) {
    flex-direction: column;
  }
`

const FooterRowTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width:680px){
    flex-direction: column;
  }
`

const FooterRowTwoPara = styled.p`
  color: #ebeef2;
`

const FooterBoxSmaller = styled.div`
  width: 33%;
  @media (max-width:1145px) {
    margin-bottom: 42px;
    width: 100%;
  }
`

const FooterBoxBigger = styled.div`
  width: calc(100% - 33%);
  @media (max-width:1145px) {
    width: 100%;
  }
`

const FooterLogo = styled.h4`
  font-size: 36px;
  color: #ebeef2;
  font-family: 'Moonhouse', sans-serif;
  margin-bottom: 6px;
`

const FooterDescription = styled.p`
  color: #ff4000;
  margin-bottom: 18px;
`

const FooterMail = styled.p`
  font-size: 16px;
  color: #ebeef2;
`

const FooterBiggerRow = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width:1145px) {
    justify-content: flex-start;
  }
  @media (max-width:680px){
    flex-direction: column;
  }
`

const FooterBiggerBox = styled.div`
  margin-left: 24px;
  padding: 0px 24px;
  @media (max-width:1145px){
    margin-left: 0px;
    margin-right: 24px;
    padding-left: 0px;
  }
  @media (max-width:680px){
    margin-bottom: 24px;
  }
`

const BiggerBoxTitle = styled.h4`
  color: #ff4000;
  margin-bottom: 10px;
  font-size: 20px;
`

const FooterList = styled.ul`
  list-style-type: none;
`

const FooterListItem = styled.li`
  margin-bottom: 6px;
`

const NavLink = styled(Link)`
  color: #ebeef2;
  text-decoration: none;
  transition: 0.4s;
  &:hover {
    color: #ff4000;
  }
`

const OutLink = styled.a`
  color: #ebeef2;
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: #ff4000;
  }
`


const Footer = () => {
  return(
    <FooterContainer>
      <Container>
        <FooterRow>
          <FooterBoxSmaller>
            <FooterLogo>QRazor</FooterLogo>
            <FooterDescription>QR Code Generator</FooterDescription>
            <FooterMail><FaEnvelope style={{marginBottom: "-3px", marginRight: "6px"}} />sarifwebdesign@gmail.com</FooterMail>
          </FooterBoxSmaller>
          <FooterBoxBigger>
            <FooterBiggerRow>
              <FooterBiggerBox>
                <BiggerBoxTitle>Navigation</BiggerBoxTitle>
                <FooterList>
                  <FooterListItem><NavLink to="/">Home</NavLink></FooterListItem>
                  <FooterListItem><NavLink to="/">About QR</NavLink></FooterListItem>
                  <FooterListItem><NavLink to="/">Creative Ideas</NavLink></FooterListItem>
                  <FooterListItem><NavLink to="/">Contact</NavLink></FooterListItem>
                </FooterList>
              </FooterBiggerBox>
              <FooterBiggerBox>
                <BiggerBoxTitle>Legal</BiggerBoxTitle>
                <FooterList>
                  <FooterListItem><NavLink to="/terms">Terms of Us</NavLink></FooterListItem>
                  <FooterListItem><NavLink to="/disclaimer">Disclaimer</NavLink></FooterListItem>
                  <FooterListItem><NavLink to="/security">QR Security</NavLink></FooterListItem>
                </FooterList>
              </FooterBiggerBox>
              <FooterBiggerBox>
                <BiggerBoxTitle>Social</BiggerBoxTitle>
                <FooterList>
                  <FooterListItem><OutLink href="https://github.com/SJuras"><FaGithub style={{marginBottom: "-3px", marginRight: "6px"}} />GitHub</OutLink></FooterListItem>
                  <FooterListItem><OutLink href="https://github.com/SJuras"><FaFacebook style={{marginBottom: "-3px", marginRight: "6px"}} />Facebook</OutLink></FooterListItem>
                  <FooterListItem><OutLink href="https://github.com/SJuras"><FaInstagram style={{marginBottom: "-3px", marginRight: "6px"}} />Instagram</OutLink></FooterListItem>
                </FooterList>
              </FooterBiggerBox>
            </FooterBiggerRow>
          </FooterBoxBigger>
        </FooterRow>
        <FooterRowTwo>
          <FooterRowTwoPara>&copy; QRazor 2021.</FooterRowTwoPara>
          <FooterRowTwoPara>Created by: Sarif-Design</FooterRowTwoPara>
        </FooterRowTwo>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
