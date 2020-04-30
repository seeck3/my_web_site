import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Header from './Components/Layout/Header';
import Container from './Components/Layout/Container';

// Type Def

function App() {
  const [value, setValue] = useState(1);
  return (
    <React.Fragment>
      <Header value={value} setValue={setValue} />
      <Container value={value} />
    </React.Fragment>
  );
}

export default App;
