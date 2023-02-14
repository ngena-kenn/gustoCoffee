import'./css/page.css';
import React from 'react';
import  Navigation from './body/Navigation';
import Home from './body/Home'
import{ Routes, Route} from "react-router-dom";
import { Dessert, Formule, GammeChaude, HealtyBowls, PokeCreation, Sides, Boissons, BoissonsChaude, BoissonsTea } from './components/global/globalPage';
import Footer from './components/Footer/footer';
 
function App() {
  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/desserts" element={<Dessert />} />
          <Route path="/home/formules" element={<Formule />} />
          <Route path="/home/gamme_chaude" element={<GammeChaude />} />
          <Route path="/home/poke_creation" element={<PokeCreation />} />
          <Route path="/home/sides" element={<Sides />} />
          <Route path="/home/healty_bowls" element={<HealtyBowls />} />
          <Route path="/home/boissons" element={ <Boissons/>} />
          <Route path="/home/boissons_chaudes" element={ <BoissonsChaude/>} />
          <Route path="/home/bubble_tea" element={ <BoissonsTea/>} />
        </Routes>
        <Footer />
    </>
    
  );
}

export default App;
