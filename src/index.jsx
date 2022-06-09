import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Loader />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
