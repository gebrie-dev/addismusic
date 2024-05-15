import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { remove } from '../store/librarySlice';
import { Link, useLocation } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa'; // Import appropriate icons
import { LibraryAddCheck } from '@emotion-icons/material-twotone';

const Container = styled.div`
  background-color: #3d3a40;
  padding: 1rem;
  position: fixed; /* Make the header fixed */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure the header is above other content */
`;

const Logo = styled.img`
  height: 50px; /* Adjust the height of the logo */
  width: 50px; /* Make the logo square */
  border-radius: 50%; /* Make the logo circular */
  margin-right: 20px; /* Add some margin to separate the logo from other elements */
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  flex-grow: 1; /* Allow the title to grow and occupy remaining space */
  font-size: 18px;
  color: #9333ea;
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
`;

const MusicIcon = styled(FaMusic)`
  margin-right: 0.5rem;
`;

const NavBar = () => {
  const librarySongs = useSelector(state => state.library);
  const dispatch = useDispatch();
  const location = useLocation();

  const removeLibraryItem = id => {
    dispatch(remove(id));
  };

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
