import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/core/App';
import swDev from './swDev';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

swDev()