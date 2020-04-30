import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

// Components
import Header from './Components/Layout/Header';
import Container from './Components/Layout/Container';

// Type Def

function App() {
  const [value, setValue] = useState(1);
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header value={value} setValue={setValue} />
        <Container value={value} />
      </React.Fragment>
    </Provider>
  );
}

export default App;
