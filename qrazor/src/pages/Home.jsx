import React from "react";
import styled from 'styled-components';

import HomeHero from '../components/HomeHero.jsx';
import About from '../components/About.jsx';
import Ideas from '../components/Ideas.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return(
    <>
      <HomeHero />
      <About />
      <Ideas />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
