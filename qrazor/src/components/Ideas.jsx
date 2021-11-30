import React from 'react';
import styled from 'styled-components';

import IdeaBox from './IdeaBox.jsx';

import Posters from '../assets/posters.png';
import BusinessCard from '../assets/businessCard.png';
import BillBoard from '../assets/billBoard.png';
import MenuPrint from '../assets/menuPrint.png';
import TShirt from '../assets/tShirt.png';
import CupQR from '../assets/cupQr.png';

const IdeasSection = styled.section`
  background-color: #ebeef2;
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

const IdeasContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const IdeasImage = styled.img`
  width: 100%;
  height: 100%;
`


const Ideas = () => {
  return(
    <IdeasSection>
      <Container>
        <SectionTitle>
          <SectionTitleH5>Creative Ideas</SectionTitleH5>
          <SectionTitleH4>How Can QR Help You?</SectionTitleH4>
        </SectionTitle>
        <IdeasContainer>
          <IdeaBox
            src={Posters}
            alt="posters and flyers with qr code"
            title="Posters and Flyers"
            para1="Place QR code on your posters and flyers"
            para2="Your clients can easily access your products or book your services via QR code."
          />
          <IdeaBox
            src={BusinessCard}
            alt="business card with qr code"
            title="Business Cards"
            para1="Having a QR code printed on your business card is a modern and streamlined way for your potential clients to access your website or web shop"
            para2="Simply enter your website's address to QRazor and print the resulting QR code on your business card"
          />
          <IdeaBox
            src={BillBoard}
            alt="billboard with qr code"
            title="Billboards"
            para1="QR code on your billboards can grant easy access to more information about the event or a product you advertize"
            para2="Make booking, reservations or ticket sale easy"
          />
          <IdeaBox
            src={MenuPrint}
            alt="restaurant menu with qr code"
            title="Menus"
            para1="QR code on your menu can simplify discounts, coupons or having your customers leave a review"
          />
          <IdeaBox
            src={TShirt}
            alt="t-shirt with qr code"
            title="T-Shirts"
            para1="Raise awareness of your brand by printing QR code on T-Shirts and other clothing"
          />
          <IdeaBox
            src={CupQR}
            alt="gift cup with qr code"
            title="Gifts"
            para1="Grant your customers with gifts and freebies with QR code printed on them, reach wider audience and gather new clients"
          />
        </IdeasContainer>
      </Container>
    </IdeasSection>
  );
}

export default Ideas;
