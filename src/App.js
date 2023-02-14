
import'./css/page.css';
import React, {Component} from 'react';
import  Navigation from './body/Navigation';
import Home from './body/Home'
import{ Routes, Route} from "react-router-dom";

function App() {
  return (
    <body>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
    </body>
    
  );
}

export default App;
