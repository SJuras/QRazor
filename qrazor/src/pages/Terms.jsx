import React from "react";
import styled from 'styled-components';

import PageHero from '../components/PageHero.jsx';
import PageContent from '../components/PageContent.jsx';
import Footer from '../components/Footer.jsx';


const Terms = () => {
  return(
    <>
      <PageHero
        title="TERMS OF USE"
       />
       <PageContent
        para1="QRazor is free and does not require any user registration."
        para2="User may submit a string of characters into QRazor QR Code Generator."
        para3="User may submit as many strings as desired, free of charge."
        para4="User may save the resulting QR code to a digital memory, print a physical graphical equivalent and/or share it in digital form and/or physical form."
        para5="User may use the resulting QR code for personal, artistic, public and commercial use."
        para6="User may generate, save, copy, distribute and use the resulting QR code free of charge."
       />
      <Footer />
    </>
  );
}

export default Terms;
