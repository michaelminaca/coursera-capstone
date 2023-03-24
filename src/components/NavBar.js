import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/Logo.svg';
import COLORS from '../assets/STYLES';

const navStyle = {
  height: '70px',
  backgroundColor: COLORS.primaryWhite,
  border: `1px solid black`,
  fontFamily: 'Markazi Text, serif',
  fontSize: '20px',
};

const NavBar = () => (
  <nav style={navStyle}>
    <HStack
      height="100%"
      width="100%"
      spacing="24px"
      justifyContent="center"
      alignItems="center"
    >
      <img src={logo} alt="logo" />
      <Link to="/">HOME</Link>
      <Link to="/">ABOUT</Link>
      <Link to="/">MENU</Link>
      <Link to="/reservations">RESERVATIONS</Link>
      <Link to="/">ORDER ONLINE</Link>
    </HStack>
  </nav>
);

export default NavBar;
