import COLORS from '../assets/STYLES';

const Card = () => {
  const cardStyle = {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: `${COLORS.primaryGreen}EF`,
    color: COLORS.primaryWhite,
    fontSize: '20px',
    borderRadius: '16px',
  };
  return (
    <div style={cardStyle}>
      <h1 style={{ padding: '10px', margin: '10px', textAlign: 'center' }}>
        Reservation Confirmed
      </h1>
    </div>
  );
};

export default Card;
