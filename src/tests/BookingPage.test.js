import { updateTimes } from '../components/BookingPage';

test('avaliableTimes reducer fuction', () => {
  expect(updateTimes({}, 10)).toStrictEqual([
    '17:00',
    '17:30',
    '18:00',
    '19:00',
    '20:30',
    '22:30',
  ]);
});
