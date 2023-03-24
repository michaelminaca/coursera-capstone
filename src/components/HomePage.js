import { HStack } from '@chakra-ui/react';

import NavBar from './NavBar';
import COLORS from '../assets/STYLES';

import bruchetta from '../assets/images/bruchetta.svg';
import greekSalad from '../assets/images/greek salad.jpg';
import marioAndAdrian from '../assets/images/Mario and Adrian A.jpg';
import marioAndAdrian2 from '../assets/images/Mario and Adrian b.jpg';

const titleTextStyle = {
  color: COLORS.primaryWhite,
  fontSize: '96px',
  fontFamily: 'Markazi Text, serif',
  textAlign: 'center',
};

const subTitleTextStyle = {
  color: COLORS.primaryWhite,
  fontSize: '64px',
  fontFamily: 'Markazi Text, serif',
  textAlign: 'center',
};

const imageStyle = {
  width: '20%',
};

const ownersImageStyle = {
  width: '40%',
  marginRight: '64px',
};

const aboutUsText = {
  fontSize: '32px',
  fontFamily: 'Karla, sans-serif',
  marginLeft: '64px',
  marginRight: '64px',
};

const HomePage = () => (
  <>
    <NavBar />
    <div style={{ height: '300px', backgroundColor: COLORS.primaryGreen }}>
      <h1 style={titleTextStyle}>Little Lemon</h1>
      <h2 style={subTitleTextStyle}>Your Local Authentic Italian Resturant</h2>
    </div>
    <HStack
      spacing="48px"
      justifyContent="center"
      marginTop="64px"
      marginBottom="64px"
    >
      <img src={bruchetta} alt={'bruchetta'} style={imageStyle} />
      <img src={greekSalad} alt={'greek salad'} style={imageStyle} />
      <img src={marioAndAdrian} alt={'bruchetta'} style={imageStyle} />
    </HStack>
    <div style={{ height: '100px', backgroundColor: COLORS.primaryGreen }}>
      <h1 style={subTitleTextStyle}>About Us</h1>
    </div>
    <HStack marginTop="64px">
      <p style={aboutUsText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img
        src={marioAndAdrian2}
        alt="owners of little lemon resturant"
        style={ownersImageStyle}
      />
    </HStack>
    <div style={{ height: '64px' }}></div>
    <div style={{ height: '64px', backgroundColor: COLORS.primaryGreen }}></div>
  </>
);

export default HomePage;
