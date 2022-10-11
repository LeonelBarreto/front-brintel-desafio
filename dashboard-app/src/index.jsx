import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './styles/main.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);