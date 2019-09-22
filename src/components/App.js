import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './common/NavBar';
import Routes from '../routes';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
