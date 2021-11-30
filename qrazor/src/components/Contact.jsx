import React from 'react';
import styled from 'styled-components';


const ContactContainer = styled.section`
  padding: 36px 0px 36px;
`

const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
`

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 54px 0px 42px;
`

const TitleContainerh5 = styled.h5`
  font-size: 24px;
  font-weight: 400;
`

const TitleContainerh4 = styled.h4`
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

const Half = styled.div`
  width: 50%;
  @media (max-width: 991.98px){
    width: 100%;
    margin-bottom: 30px;
  }
`


const Contact = () => {
  return(
    <ContactContainer>
      <Container>
        <TitleContainer>
          <TitleContainerh5>Contact Us</TitleContainerh5>
          <TitleContainerh4>Keep In Touch</TitleContainerh4>
        </TitleContainer>
        <DoubleContainer>
          <Half></Half>
          <Half></Half>
        </DoubleContainer>
      </Container>
    </ContactContainer>
  );
}

export default Contact;
