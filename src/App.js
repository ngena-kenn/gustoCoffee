import './css/page.css';
import React, { useState } from 'react';
import Navigation from './body/Navigation';
import Home from './body/Home'
import { Routes, Route } from "react-router-dom";
import {
  Dessert, Formule, GammeChaude, HealtyBowls, PokeCreation,
  Sides, Boissons, BoissonsChaude, BoissonsTea
} from './components/global/globalPage';
import Footer from './components/Footer/footer';
import FormDialog from './components/dialog';
import ViewProduct from './components/viewProduct/viewProduct';

const App = () => {
  const [commande, setcommande] = useState(false)
  const [open, setOpen] = useState(false)
  const [viewProduct, setViewProduct] = useState(false)
  const [prodducts, setProducts] = useState([])
  const [cmd, setcmd] = useState(false)

  const handleAddProduct = () => {
    console.log(prodducts);
    console.log(Object.keys(prodducts).length);
  }

  const handleCommande = () => {
    setcommande(!commande)
    setcmd(true)
    !commande && handleAddProduct()
  }

  const validateCommande = () => {
    setOpen(true)
  }

  const cancelCommande = () => {
    setViewProduct(false)
    setcommande(false)
    setcmd(false)
    setProducts([])
  }
  
  const confirmCommande = () => {
    setcmd(false)
  }

  const getCountProduct = () => {
    return Object.keys(prodducts).length
  }

  return (
    <>
      <Navigation setViewProduct={setViewProduct} countProduct={getCountProduct()}
        commande={commande} setcommande={handleCommande} cmd={cmd} validateCommande={validateCommande}
        openAdress={open} setOpen={setOpen} />
      <FormDialog
        title={"Coordonnées de livraison"}
        text={"Veuillez entrer votre adresse s'il vous plait"}
        open={open}
        setOpen={setOpen}
        cancelCommande={cancelCommande}
      />
      <ViewProduct products={prodducts} cancelCommande={cancelCommande} confirmCommande={confirmCommande}
        viewProduct={viewProduct} setViewProduct={setViewProduct} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/desserts" element={
          <Dessert handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/formules" element={
          <Formule handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/gamme_chaude" element={
          <GammeChaude handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/poke_creation" element={
          <PokeCreation handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/sides" element={
          <Sides handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/healty_bowls" element={
          <HealtyBowls handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/boissons" element={
          <Boissons handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/boissons_chaudes" element={
          <BoissonsChaude handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
        <Route path="/home/bubble_tea" element={
          <BoissonsTea handleAddProduct={handleAddProduct} setProducts={setProducts} commande={commande} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
