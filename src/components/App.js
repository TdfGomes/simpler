import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './common/NavBar';
import Routes from '../routes';
import { AppContext } from './AppContext';

function App() {
  return (
    <Router>
      <NavBar />
      <AppContext>
        <Routes />
      </AppContext>
    </Router>
  );
}

export default App;
