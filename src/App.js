import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [formInput, setFormInput] = useState({
    name: '',
    date: '',
    time: '',
    numberOfDiners: '',
  });

  return (
    <ChakraProvider>
      <div
        style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <NavBar />
        <Main formInput={formInput} setFormInput={setFormInput} />
      </div>
    </ChakraProvider>
  );
}

export default App;
