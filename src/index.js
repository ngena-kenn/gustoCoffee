// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/page.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HelmetProvider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
</HelmetProvider>
);
