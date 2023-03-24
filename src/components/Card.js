import COLORS from '../assets/STYLES';
import { VStack } from '@chakra-ui/react';

const Card = ({ setIsReservationBooking }) => {
  const cardStyle = {
    fontSize: '48px',
    fontFamily: 'Karla, sans-serif',
    textAlign: 'center',
    marginTop: '40px',
  };

  const buttonStyle = {
    backgroundColor: COLORS.primaryGreen,
    padding: '10px',
    color: COLORS.primaryWhite,
    borderRadius: '16px',
  };

  return (
    <VStack>
      <h1 style={cardStyle}>Reservation Booked</h1>
      <button
        style={buttonStyle}
        onClick={() => setIsReservationBooking(false)}
      >
        Back
      </button>
    </VStack>
  );
};

export default Card;
