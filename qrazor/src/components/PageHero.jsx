import React from 'react';
import styled from 'styled-components';

import BackgroundImg1 from '../assets/pageHeroBg.png';

const PageHeroContainer = styled.section`
  width: 100%;
  height: 50vh;
  position: relative;
  background-image: url(${BackgroundImg1});
  background-position: center;
  background-size: cover;
`

const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
`

const PageHeroInner = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageHeroH1 = styled.h1`
  font-size: 42px;
  text-align: center;
  color: #ff4000;
  text-transform: uppercase;
`


function PageHero(props){
  return(
    <PageHeroContainer>
      <Container>
        <PageHeroInner>
          <PageHeroH1>{props.title}</PageHeroH1>
        </PageHeroInner>
      </Container>
    </PageHeroContainer>
  );
}

export default PageHero;
