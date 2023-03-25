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
