

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/page.css';
import './css/style.css';
import { CartProvider } from 'react-use-cart';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

