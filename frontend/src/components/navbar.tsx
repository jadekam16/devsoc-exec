import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const MyAppBar = styled(AppBar)`
  && {
    background-color: #A09ABC !important;
  }
`;

const NavButton = styled(IconButton)`
  color: white;
`;

// container for links
const LinksContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around; 
`;

const NavLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;
  margin-right: 16px;
  &:hover {
    background-color: gray; // placeholder style
  }
`;

const Navbar: React.FC = () => {
    return (
        <MyAppBar position="static">
            <Toolbar>
                <NavButton edge="start" aria-label="menu">
                    <MenuIcon />
                </NavButton>
                <LinksContainer>
                    <NavLink to="about" smooth={true} duration={500}>About Me</NavLink>
                    <NavLink to="vision" smooth={true} duration={500}>Vision & Goals</NavLink>
                    <NavLink to="experience" smooth={true} duration={500}>Experience</NavLink>
                    <NavLink to="why" smooth={true} duration={500}>My Reason Why</NavLink>
                </LinksContainer>
            </Toolbar>
        </MyAppBar>
    );
};

export default Navbar;
