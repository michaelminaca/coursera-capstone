import { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../assets/STYLES';

import Card from './Card';

import API_FUNCS from '../API';

const BookingForm = ({
  formInput,
  setFormInput,
  avaliableTimes,
  setAvaliableTimes,
  submitForm,
}) => {
  const [isReservationBooking, setIsReservationBooking] = useState(false);
  const [isValid, setIsValid] = useState({
    name: false,
    date: false,
    numberOfDiners: false,
    occasion: false,
  });

  const submitButtonStyle = {
    backgroundColor:
      isValid.name && isValid.date && isValid.numberOfDiners
        ? COLORS.primaryGreen
        : 'grey',
    padding: '10px',
    color: COLORS.primaryWhite,
    borderRadius: '16px',
    disabled: true,
  };

  useEffect(() => {
    if (formInput.name.length > 0) {
      setIsValid((prev) => {
        return { ...prev, name: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, name: false };
      });
    }

    if (formInput.date !== '') {
      setIsValid((prev) => {
        return { ...prev, date: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, date: false };
      });
    }

    if (formInput.numberOfDiners > 0 && formInput.numberOfDiners < 11) {
      setIsValid((prev) => {
        return { ...prev, numberOfDiners: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, numberOfDiners: false };
      });
    }
  }, [formInput]);

  const formTextStyle = {
    fontFamily: 'Karla, sans-serif',
    fontSize: '30px',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormInput({
      name: '',
      date: '',
      time: '',
      numberOfDiners: '',
      occasion: '',
    });
    if (API_FUNCS.submitAPI(formInput)) setIsReservationBooking(true);
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
              <label
                for="name-input"
                style={{ ...formTextStyle, marginTop: '48px' }}
              >
                Name:
              </label>
              <input
                id="name-input"
                type="text"
                required
                aria-label="Name"
                aria-required="true"
                onChange={(e) =>
                  setFormInput((prev) => {
                    return { ...prev, name: e.target.value };
                  })
                }
                value={formInput.name}
              ></input>
            </VStack>
            <VStack>
              <label for="date-input" style={formTextStyle}>
                Date:{' '}
              </label>
              <input
                id="date-input"
                type="date"
                required
                onChange={(e) =>
                  setFormInput((prev) => {
                    setAvaliableTimes(e.target.value);
                    return { ...prev, date: e.target.value };
                  })
                }
                value={formInput.date}
              ></input>
            </VStack>
            <VStack>
              <label for="time-input" style={formTextStyle}>
                Time:{' '}
              </label>
              <select
                id="time-input"
                aria-label="Date"
                aria-required="true"
                onChange={(e) =>
                  setFormInput((prev) => {
                    return { ...prev, time: e.target.value };
                  })
                }
                value={formInput.time}
              >
                {avaliableTimes.map((val) => (
                  <option key={val}>{val}</option>
                ))}
              </select>
            </VStack>
            <VStack>
              <label for="numberOfDiners-input" style={formTextStyle}>
                Number of Diners:{' '}
              </label>
              <input
                id="numberOfDiners-input"
                type="number"
                required
                placeholder="1"
                min="1"
                max="10"
                aria-label="Number of Diners"
                aria-required="true"
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
            <VStack>
              <label for="occasion-input" style={formTextStyle}>
                Occasion (Optional):{' '}
              </label>
              <input
                id="occasion-input"
                type="text"
                aria-label="Occasion"
                onChange={(e) =>
                  setFormInput((prev) => {
                    return {
                      ...prev,
                      occasion: e.target.value,
                    };
                  })
                }
                value={formInput.occasion}
              ></input>
            </VStack>
            <button
              type="submit"
              form="reserve-table-form"
              style={submitButtonStyle}
              data-testid="submit-button"
              aria-label="On Click"
            >
              Submit
            </button>
          </VStack>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
