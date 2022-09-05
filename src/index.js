import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './Contexts/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>
);

