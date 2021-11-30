import React from 'react';
import styled from 'styled-components';


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
        </PageInner>
      </Container>
    </PageContainer>
  );
}

export default PageContent;
