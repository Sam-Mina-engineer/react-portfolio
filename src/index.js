import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';

// Import App

import App from './App';

// Rendering App

const root = ReactDOM.createRoot(document.getElementById('root'));

// Inside root element

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

