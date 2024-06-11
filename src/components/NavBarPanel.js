import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';
import { LibraryAddCheck } from '@emotion-icons/material-twotone';

const Container = styled.div`
  background-color: #3d3a40;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  /* Add media query for smaller screens */
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;

  /* Adjust size for smaller screens */
  @media screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
  flex-grow: 1;
  font-size: 18px;
  color: #9333ea;

  /* Adjust font size for smaller screens */
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? '#fff' : '#adb5bd'};
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  /* Adjust padding for smaller screens */
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Badge = styled.span`
  background-color: #28a745;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
`;

const Button = styled.button`
  background-color: #280745;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6c5ce7;
  }

  /* Adjust padding for smaller screens */
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const MusicIcon = styled(FaMusic)`
  margin-right: 0.5rem;
`;

const NavBar = () => {
  const librarySongs = useSelector(state => state.library);
  const location = useLocation();

  return (
    <Container>
      <Nav>
        <Link to="/">
          <Logo src="../favicon.ico" alt="App Logo" />
        </Link>
        <HeaderTitle>Addis Song</HeaderTitle>
        <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
          <MusicIcon /> Songs
        </NavLink>
        <NavLink to="/library" className={location.pathname === '/library' ? 'active' : ''}>
          <Button>
            <LibraryAddCheck size={20} /> Library <Badge>{librarySongs.length}</Badge>
          </Button>
        </NavLink>
      </Nav>
    </Container>
  );
};

export default NavBar;
