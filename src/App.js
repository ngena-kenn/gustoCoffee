import'./css/page.css';
import './body/commande/style.css'
import React from 'react';
import  Navigation from './body/Navigation';
import Home from './body/Home'
import{ Routes, Route} from "react-router-dom";
import { Dessert, Formule, GammeChaude, HealtyBowls, PokeCreation, Sides, Boissons, BoissonsChaude, BoissonsTea } from './components/global/globalPage';
import Footer from './components/Footer/footer';
import Login from './body/commande/Authentification';
import Connect from './body/Connexionn';
import A_propos from './body/A_propos';
import Actualites from './body/Actualite';
import Franchise from './body/Franchise';
 
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
          <Route path="/login" element={ <Login/>} />
          <Route path="/a_propos" element={ <A_propos/>} />
          <Route path="/connect" element={ <Connect/>} />
          <Route path="/actualite" element={ <Actualites/>} />
          <Route path="/franchise" element={ <Franchise/>} />



        </Routes>
        <Footer />
    </>
    
  );
}

export default App;
