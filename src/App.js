import './App.css';
import logo from './assets/images/Logo.svg';
import lemonDessert from './assets/images/lemon-dessert.jpg';
import { ChakraProvider, HStack, VStack } from '@chakra-ui/react';

function App() {
  const COLORS = {
    primaryGreen: '#495E57',
    primaryWhite: '#EDEFEE',
  };
  const navStyle = {
    height: '70px',
    backgroundColor: COLORS.primaryWhite,
    border: `1px solid black`,
    fontFamily: 'Markazi Text, serif',
    fontSize: '20px',
  };

  const leftContainerStyle = {
    backgroundColor: COLORS.primaryGreen,
    flex: 1,
    height: '100%',
  };

  const reserveTableTextStyle = {
    fontFamily: 'Markazi Text, serif',
    color: COLORS.primaryWhite,
    fontSize: '64px',
    textAlign: 'center',
    letterSpacing: '10px',
    marginLeft: '20px',
    marginRight: '20px',
  };

  const formTextStyle = {
    fontFamily: 'Karla, sans-serif',
    fontSize: '30px',
  };

  const submitButtonStyle = {
    backgroundColor: COLORS.primaryGreen,
    padding: '10px',
    color: COLORS.primaryWhite,
    borderRadius: '16px',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
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
          <VStack
            style={leftContainerStyle}
            justifyContent="center"
            alignItems="center"
            spacing="20%"
          >
            <h1 style={reserveTableTextStyle}>Reserve a Table</h1>
            <img
              src={lemonDessert}
              alt="lemon dessert"
              style={{ width: '75%' }}
            ></img>
          </VStack>
          <div
            style={{
              backgroundColor: COLORS.primaryWhite,
              flex: 3,
              height: '100%',
            }}
          >
            <form>
              <VStack spacing="3%" justifyContent="center" alignItems="center">
                <label style={{ ...formTextStyle, marginTop: '48px' }}>
                  Name:
                </label>
                <input type="text" required></input>
                <label style={formTextStyle}>Date: </label>
                <input type="date" required></input>
                <label style={formTextStyle}>Time: </label>
                <input type="time" required></input>
                <label style={formTextStyle}>Number of Diners: </label>
                <input type="number" required min="1" max="32"></input>
                <button
                  type="submit"
                  style={submitButtonStyle}
                  onSubmit={(e) => submitHandler(e)}
                >
                  Submit
                </button>
              </VStack>
            </form>
          </div>
        </main>
        <footer></footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
