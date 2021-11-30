import React from 'react';
import styled from 'styled-components';


const IdeaBoxContainer = styled.div`
  width: 360px;
  height: 360px;
  margin-bottom: 36px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  background-color: #fff;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0,0,0,0.5);
  }
  @media (max-width: 991.98px){
    width: 100%;
    height: initial;
    min-height: 400px;
  }
`

const ImageContainer = styled.div`
  width: 200px;
`

const IdeasImage = styled.img`
  width: 100%;
  height: 100%;
`

const IdeaBoxH4 = styled.h4`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`

const IdeaBoxP = styled.p`
  text-align: center;
  margin-bottom: 12px;
`


function IdeasBox(props){
  return(
    <IdeaBoxContainer>
      <ImageContainer>
        <IdeasImage src={props.src} alt={props.alt} />
      </ImageContainer>
      <IdeaBoxH4>
        {props.title}
      </IdeaBoxH4>
      <IdeaBoxP>
        {props.para1}
      </IdeaBoxP>
      <IdeaBoxP>
        {props.para2}
      </IdeaBoxP>
    </IdeaBoxContainer>
  );
}

export default IdeasBox;
