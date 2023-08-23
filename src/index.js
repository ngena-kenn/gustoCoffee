

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/page.css';
import './css/style.css';
import { CartProvider } from 'react-use-cart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HelmetProvider >
 <CartProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </CartProvider>
</HelmetProvider>
);

