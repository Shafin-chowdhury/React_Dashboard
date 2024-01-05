import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'

// import { Router } from 'react-router-dom'
import Router from './Router/Router.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);