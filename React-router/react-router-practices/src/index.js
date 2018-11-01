import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as registerServiceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
