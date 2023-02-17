import './css/page.css';
import './body/commande/style.css'
import React, { useEffect, useState } from 'react';
import Navigation from './body/Navigation';
import Home from './body/Home'
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router'
import {
  Dessert, Formule, GammeChaude, HealtyBowls, PokeCreation, Sides, Boissons, BoissonsChaude,
  BoissonsTea
} from './components/global/globalPage';
import Footer from './components/Footer/footer';
import FormDialog from './components/dialog';
import ViewProduct from './components/viewProduct/viewProduct';
import Login from './body/commande/Authentification';
import Apropos from './body/A_propos';
import Franchise from './body/Franchise';
import Actualite from './body/Actualite'
import Acceuil from './components/acceuil/acceuil';
import Swal from 'sweetalert2'
import Alert from '../node_modules/@mui/material/Alert';

const App = () => {
  const [firstConnexion, setfirstConnexion] = useState(false)
  const [commande, setcommande] = useState(false)
  const [open, setOpen] = useState(false)
  const [viewProduct, setViewProduct] = useState(false)
  const [prodducts, setProducts] = useState([])
  const [cmd, setcmd] = useState(false)
  const { pathname } = useLocation();

  const handleAddProduct = () => {
    console.log(prodducts);
    console.log(Object.keys(prodducts).length);
  }

  const coupon = [
    "un menu de 35 euros gratuit",
    "50% de réduction sur le 2nd menu acheté",
    "10% de réduction sur ta commande dès 30 euros",
  ]

  useEffect(() => {
    console.log(pathname);
    if(pathname === '/@key=AIzaSyAUYsJuillokUbWvzzc-G2qebJLDhpPBHE') {
       Swal.fire({
        title: 'Bravo!',
        text: `Vous avez gagnez ${coupon[Math.floor(Math.random() * 3)]}`,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
    setfirstConnexion(false)
  }, [])

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
      {pathname !== '/login' && pathname !== '/'&& pathname !== '/@key=AIzaSyAUYsJuillokUbWvzzc-G2qebJLDhpPBHE'
       && <Navigation setViewProduct={setViewProduct} countProduct={getCountProduct()}
        commande={commande} setcommande={handleCommande} cmd={cmd} validateCommande={validateCommande}
        openAdress={open} setOpen={setOpen} />}
      <FormDialog
        title={"Coordonnées de livraison"}
        text={"Veuillez entrer votre adresse s'il vous plait"}
        open={open}
        setOpen={setOpen}
        cancelCommande={cancelCommande}
      />
      <ViewProduct products={prodducts} cancelCommande={cancelCommande} confirmCommande={confirmCommande}
        viewProduct={viewProduct} setViewProduct={setViewProduct} />
      <Alert severity="success">Si vous créez un compte vous aurez un cadeau de plus </Alert>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Acceuil />} />
        <Route path="/menu" element={<Home />} />
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
        <Route path="/a_propos" element={<Apropos />} />
        <Route path="/franchise" element={<Franchise title={'NOTRE FRANCHISE'} />} />
        <Route path="/actualite" element={<Actualite />} />
        <Route path="*" element={<Login />} />

      </Routes>
      {pathname !== '/login' && pathname !== '/' && pathname !== '/@key=AIzaSyAUYsJuillokUbWvzzc-G2qebJLDhpPBHE' && <Footer />}
    </>
  );
}

export default App;
