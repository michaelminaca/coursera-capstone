import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
