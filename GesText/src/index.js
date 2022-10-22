import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter} from "react-router-dom";










ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);