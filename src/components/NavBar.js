import { HStack } from '@chakra-ui/react';
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
      <a href="./">HOME</a>
      <a href="./">ABOUT</a>
      <a href="./">MENU</a>
      <a href="./">RESERVATIONS</a>
      <a href="./">ORDER ONLINE</a>
    </HStack>
  </nav>
);

export default NavBar;
