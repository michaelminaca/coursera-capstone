import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(
    <BookingForm
      formInput={{
        name: '',
        date: '',
        time: '',
        numberOfDiners: '',
      }}
      avaliableTimes={['17:00', '17:30', '18:00']}
    />
  );
  const headingElement = screen.getByText('Name:');
  expect(headingElement).toBeInTheDocument();
});

test('Updates stylying of submit button for form input, blank name', () => {
  render(
    <BookingForm
      formInput={{
        name: '',
        date: '17/03/2023',
        time: '17:00',
        numberOfDiners: '5',
      }}
      avaliableTimes={['17:00', '17:30', '18:00']}
    />
  );
  const buttonElement = screen.getByTestId('submit-button');
  expect(buttonElement.style.backgroundColor).toBe('grey');
});

test('Updates stylying of submit button for form input, blank date', () => {
  render(
    <BookingForm
      formInput={{
        name: 'Joe',
        date: '',
        time: '',
        numberOfDiners: '5',
      }}
      avaliableTimes={['17:00', '17:30', '18:00']}
    />
  );
  const buttonElement = screen.getByTestId('submit-button');
  expect(buttonElement.style.backgroundColor).toBe('grey');
});

test('Updates stylying of submit button for form input, blank number of diners', () => {
  render(
    <BookingForm
      formInput={{
        name: 'Joe',
        date: '17/03/2023',
        time: '17:00',
        numberOfDiners: '',
      }}
      avaliableTimes={['17:00', '17:30', '18:00']}
    />
  );
  const buttonElement = screen.getByTestId('submit-button');
  expect(buttonElement.style.backgroundColor).toBe('grey');
});

test('Updates stylying of submit button for form input, all fields correct', () => {
  render(
    <BookingForm
      formInput={{
        name: 'Joe',
        date: '17/03/2023',
        time: '17:00',
        numberOfDiners: '5',
      }}
      avaliableTimes={['17:00', '17:30', '18:00']}
    />
  );
  const buttonElement = screen.getByTestId('submit-button');
  expect(buttonElement.style.backgroundColor).toBe('rgb(73, 94, 87)');
});
