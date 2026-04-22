import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css'
import { MainView } from './MainView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainView/>
  </React.StrictMode>
);
