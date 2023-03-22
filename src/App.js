import './App.css';
import logo from './assets/images/Logo.svg';
import { ChakraProvider, HStack } from '@chakra-ui/react';

function App() {
  const navStyle = {
    height: '70px',
    backgroundColor: 'black',
  };

  return (
    <ChakraProvider>
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
      <main></main>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;
