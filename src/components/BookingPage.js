import { useState, useReducer } from 'react';
import Main from './Main';
import NavBar from './NavBar';

import API_FUNCS from '../API';

export const updateTimes = (state, action) => {
  return API_FUNCS.fetchAPI(action);
};

const ReservationsPage = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    date: '',
    time: '',
    numberOfDiners: '',
  });

  const submitForm = (formData) => API_FUNCS.submitForm(formData);

  const [avaliableTimes, setAvaliableTimes] = useReducer(updateTimes, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <Main
        formInput={formInput}
        setFormInput={setFormInput}
        avaliableTimes={avaliableTimes}
        setAvaliableTimes={setAvaliableTimes}
        submitForm={submitForm}
      />
    </div>
  );
};

export default ReservationsPage;
