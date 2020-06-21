import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {HashRouter as Router} from 'react-router-dom'; // For react browser router


ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
);

serviceWorker.register();
