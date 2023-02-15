

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/page.css';
import './body/commande/style.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HelmetProvider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
</HelmetProvider>
);
