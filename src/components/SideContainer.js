import { VStack } from '@chakra-ui/react';
import COLORS from '../assets/STYLES';
import lemonDessert from '../assets/images/lemon-dessert.jpg';

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

const SideContainer = () => (
  <VStack
    style={leftContainerStyle}
    justifyContent="center"
    alignItems="center"
    spacing="20%"
  >
    <h1 style={reserveTableTextStyle}>Reserve a Table</h1>
    <img src={lemonDessert} alt="lemon dessert" style={{ width: '75%' }}></img>
  </VStack>
);

export default SideContainer;
