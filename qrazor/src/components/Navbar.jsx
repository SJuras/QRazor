import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Nav = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`

const NavLink = styled(Link)`

`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px){
    display: flex;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 0.4s;

  @media (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")}
  }
`

const MenuLink = styled(Link)`
  padding: 0.5rem 2rem;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: 0.4s;
  &:hover{
    color: #ff4000;
  }
`

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <Nav>
      <Link to="/">QRazor</Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/terms">Terms of Use</MenuLink>
        <MenuLink to="/disclaimer">Disclaimer</MenuLink>
        <MenuLink to="/security">QR Security</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;
