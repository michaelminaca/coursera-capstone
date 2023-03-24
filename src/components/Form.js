import { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../assets/STYLES';

import Card from './Card';

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

const Form = ({ formInput, setFormInput }) => {
  const [isReservationBooking, setIsReservationBooking] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formInput);
    setFormInput({ name: '', date: '', time: '', numberOfDiners: '' });
    setIsReservationBooking(true);
  };

  return (
    <div
      style={{
        backgroundColor: COLORS.primaryWhite,
        flex: 3,
        height: '100%',
      }}
    >
      {isReservationBooking ? (
        <Card setIsReservationBooking={setIsReservationBooking} />
      ) : (
        <form id="reserve-table-form" onSubmit={(e) => submitHandler(e)}>
          <VStack spacing="3%" justifyContent="center" alignItems="center">
            <VStack>
              <label style={{ ...formTextStyle, marginTop: '48px' }}>
                Name:
              </label>
              <input
                type="text"
                required
                onChange={(e) =>
                  setFormInput((prev) => {
                    return { ...prev, name: e.target.value };
                  })
                }
                value={formInput.name}
              ></input>
            </VStack>
            <VStack>
              <label style={formTextStyle}>Date: </label>
              <input
                type="date"
                required
                onChange={(e) =>
                  setFormInput((prev) => {
                    return { ...prev, date: e.target.value };
                  })
                }
                value={formInput.date}
              ></input>
            </VStack>
            <VStack>
              <label style={formTextStyle}>Time: </label>
              <input
                type="time"
                required
                onChange={(e) =>
                  setFormInput((prev) => {
                    return { ...prev, time: e.target.value };
                  })
                }
                value={formInput.time}
              ></input>
            </VStack>
            <VStack>
              <label style={formTextStyle}>Number of Diners: </label>
              <input
                type="number"
                required
                min="1"
                max="32"
                onChange={(e) =>
                  setFormInput((prev) => {
                    return {
                      ...prev,
                      numberOfDiners: e.target.value,
                    };
                  })
                }
                value={formInput.numberOfDiners}
              ></input>
            </VStack>

            <button
              type="submit"
              form="reserve-table-form"
              style={submitButtonStyle}
            >
              Submit
            </button>
          </VStack>
        </form>
      )}
    </div>
  );
};

export default Form;
