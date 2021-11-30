import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";


const PageContainer = styled.div`

`

const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
`

const PageInner = styled.div`
  padding: 120px 0px 60px;
`

const PageInnerH2 = styled.h2`
  margin-bottom: 6px;
`

const PageInnerP = styled.p`
  font-size: 20px;
  margin-bottom: 24px;
`

const BtnContainer = styled.div`
  padding: 42px 0px 30px;
`

const Btn = styled(Link)`
  width: 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* margin: 0 10px; */
  padding: 12px 0;
  background-color: #ff4000;
  color: #fff;
  border: 0.5px solid #ff4000;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #4f78de;
    border-color: #4f78de;
  }
`


function PageContent(props){
  return(
    <PageContainer>
      <Container>
        <PageInner>
          <PageInnerH2>{props.title1}</PageInnerH2>
          <PageInnerP>{props.para1}</PageInnerP>
          <PageInnerP>{props.para2}</PageInnerP>
          <PageInnerP>{props.para3}</PageInnerP>
          <PageInnerH2>{props.title2}</PageInnerH2>
          <PageInnerP>{props.para4}</PageInnerP>
          <PageInnerP>{props.para5}</PageInnerP>
          <PageInnerP>{props.para6}</PageInnerP>
          <PageInnerP>{props.para7}</PageInnerP>
          <PageInnerP>{props.para8}</PageInnerP>
          <PageInnerP>{props.para9}</PageInnerP>
          <PageInnerH2>{props.title3}</PageInnerH2>
          <PageInnerP>{props.para10}</PageInnerP>
          <BtnContainer>
            <Btn to='/'><FaChevronLeft style={{marginBottom: "-3px", marginRight: "6px"}} />Back</Btn>
          </BtnContainer>
        </PageInner>
      </Container>
    </PageContainer>
  );
}

export default PageContent;
