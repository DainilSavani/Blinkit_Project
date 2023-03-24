import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// style
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
