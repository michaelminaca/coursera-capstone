import { useState } from 'react';
import Main from '../components/Main';
import NavBar from './NavBar';

const ReservationsPage = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    date: '',
    time: '',
    numberOfDiners: '',
  });
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <Main formInput={formInput} setFormInput={setFormInput} />
    </div>
  );
};

export default ReservationsPage;
