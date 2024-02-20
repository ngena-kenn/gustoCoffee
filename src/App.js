import './css/page.css';
import './css/style.css';
import React, { useEffect, useState } from 'react';
import Navigation from './body/Navigation';
import Nos_Espaces from './body/Espaces'
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router'
import Footer from './components/Footer/footer';
import FormDialog from './components/dialog';
import ViewProduct from './components/viewProduct/viewProduct';
import SuccessPay from './components/Reservation/sucessPay';
import Login from './body/commande/signIn';
import Myaccount from './body/commande/Myaccount';
import Inscript from './body/commande/signUp';
import Tarifs from './components/tarif/tarifs';
import Franchise from './body/Franchise';
import Mentions from './body/mentions';
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
    if (prodducts !== undefined && prodducts !== null) {
      const keys = Object.keys(prodducts).length;
      console.log(keys);
    } else {
      console.log("data is undefined or null.");
    }
   // return Object.keys(prodducts).length
  }
 

  return (
    <>
      {pathname !== '/login' &&
       <Navigation setViewProduct={setViewProduct} countProduct={getCountProduct()}
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
        <Route path="/connect" element={<Login />} />
        <Route path="/inscript" element={<Inscript />} />
        <Route path="/my-account" element={<Myaccount />} />
        <Route path="/" element={<Acceuil />} />
        <Route path="/home" element={<Acceuil />} />
        <Route path="/espaces" element={<Nos_Espaces />}/>
        <Route path="/a_propos" element={<Tarifs />} />
        <Route path="/franchise" element={<Franchise title={'NOTRE FRANCHISE'} />} />
        <Route path="/successpay" element={<SuccessPay />} />
        <Route path="/actualite" element={<Actualite />} />
        <Route path="/mentions" element={<Mentions />} />

        <Route path="*" element={<Acceuil />} />

      </Routes>
      {pathname !== '/login' &&
      <Footer />}
    </>
  );
}

export default App;

// pathname !== '/' && pathname !== '/@key=AIzaSyAUYsJuillokUbWvzzc-G2qebJLDhpPBHE' && 