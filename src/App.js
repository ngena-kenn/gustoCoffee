import'./css/page.css';
import React, {Component} from 'react';
import  Navigation from './body/Navigation';
import Home from './body/Home'
import{ Routes, Route} from "react-router-dom";
import Desserts from './components/containerPage/containerPage';
import { boissons, boissons_chaude, boissons_tea, desserts, formule, gamme_chaude, healty_bowls, poke_creation, sides } from './data';
 
function App() {
  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/desserts" element={<Desserts data={desserts} />} />
          <Route path="/home/formule" element={<Desserts data={formule} />} />
          <Route path="/home/gamme_chaude" element={<Desserts data={gamme_chaude} />} />
          <Route path="/home/poke_creation" element={<Desserts data={poke_creation} />} />
          <Route path="/home/sides" element={<Desserts data={sides} />} />
          <Route path="/home/healty_bowls" element={<Desserts data={healty_bowls} />} />
          <Route path="/home/boissons" element={<Desserts data={boissons} />} />
          <Route path="/home/boissons_chaude" element={<Desserts data={boissons_chaude} />} />
          <Route path="/home/boissons_tea" element={<Desserts data={boissons_tea} />} />
        </Routes>
    </>
    
  );
}

export default App;
