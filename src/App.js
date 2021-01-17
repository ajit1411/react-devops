import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';

const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
