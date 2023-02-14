import'./css/page.css';
import React, {Component} from 'react';
import  Navigation from './body/Navigation';
import Home from './body/Home'
import{ Routes, Route} from "react-router-dom";
import Desserts from './components/containerPage/containerPage';
import { desserts } from './data';
 
function App() {
  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/desserts" element={<Desserts data={desserts} />} />
        </Routes>
    </>
    
  );
}

export default App;
