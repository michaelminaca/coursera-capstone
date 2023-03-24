import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import ReservationsPage from './components/ReservationsPage';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
