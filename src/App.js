import './App.css';
import logo from './assets/images/Logo.svg';
import { ChakraProvider, HStack } from '@chakra-ui/react';

function App() {
  const COLORS = {
    primaryGreen: '#495E57',
    primaryWhite: '#EDEFEE',
  };
  const navStyle = {
    height: '70px',
    backgroundColor: COLORS.primaryWhite,
    border: `1px solid black`,
  };

  return (
    <ChakraProvider>
      <div
        style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      >
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
        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: COLORS.primaryGreen,
              flex: 1,
              height: '100%',
            }}
          ></div>
          <div
            style={{
              backgroundColor: COLORS.primaryWhite,
              flex: 3,
              height: '100%',
            }}
          ></div>
        </main>
        <footer></footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
