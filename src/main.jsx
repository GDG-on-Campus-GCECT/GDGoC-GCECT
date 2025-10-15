import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; // 👈 Import the provider
import router from './Router';                       // 👈 Import your router configuration

// Import your global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Wrap your app in the RouterProvider and pass it the router */}
    <RouterProvider router={router} />
  </React.StrictMode>
);