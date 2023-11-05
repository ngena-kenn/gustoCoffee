import logo from '../image/logo.png';
import {getAuth , onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebaseconfig";
import { Link, useNavigate } from 'react-router-dom';
import React, {useContext, useEffect, useState } from "react";
import '../css/page.css';
import '../css/page.scss';
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "react-use-cart";



const Navigation = ({ commande, setcommande, countProduct, setViewProduct, cmd, validateCommande }) => {
 const navigate = useNavigate()
 const { isEmpty, totalItems, totalUniqueItems} = useCart();
 const [authUser, setAuthUser] = useState(null);
 const auth = getAuth(app);

 useEffect(() => {
   const listen = onAuthStateChanged(auth, (user) => {
     if (user) {
       setAuthUser(user);
     } else {
       setAuthUser(null);
     }
   });

   return () => {
     listen();
   };
 }, []);

 const userSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("sign out successful");
    })
    .catch((error) => console.log(error));
};


  return (
    <>
      <nav style={{
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.753)', position: 'fixed', justifyContent: 'center',
      width: '100%', zIndex: 99999, top: 0, backgroundColor: 'white', marginBottom: 50
    }} class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" >
          <div className="navbar-brand"  style={{padding: 0}}>
            <Link to={"/home"}>
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" style={{justifyContent: 'center'}} id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='./home' class="nav-link active">Accueil</Link>
              </li>
              <li class="nav-item">
                <Link to='/espaces' class="nav-link">Espaces</Link>
              </li>
              <li class="nav-item">
                <Link  to='/a_propos' class="nav-link" >Tarifs</Link>
              </li>
              <li class="nav-item">
                <Link to='/actualite' class="nav-link">Evenements</Link>
              </li>
              <li class="nav-item">
                <Link to='/franchise' class="nav-link">Franchise</Link>
              </li>
              <li class="nav-item">
                {authUser ? (
                <div onClick={() => {
                  setViewProduct(prev => !prev)
                }}>
                  <Badge style={{ cursor: "pointer", padding: '10px', marginRight: 20, }} color="success" badgeContent={totalUniqueItems}>
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </div>):(<></>)}
              </li>
              <li class="nav-item">
              {authUser ? (
          <>
          <div style={{ paddingLeft: 10, paddingBottom: 10}}>
                <Link to="/my-account" class="nav-link" >
                <i class="fa fa-user" aria-hidden="true"></i>
                &nbsp;{`${authUser.email}`}</Link>
                </div>
         </>
      ) : (
        <div style={{ paddingLeft: 10, paddingBottom: 10}}>
                  <Button onClick={() => {
                    navigate('/connect')
                  }} variant='outlined' color='success'  
                  >Connexion</Button>
                </div>
      )}      
              </li>
              <li class="nav-item">
                <div style={{ paddingLeft: 10, paddingBottom: 10}}>
                  <Button onClick={() => {
                    navigate('/inscript')
                  }} variant='outlined' color='success'  
                  >Inscription</Button>
                </div>
              </li>
              <li class="nav-item logo-reseau-socio">
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Navigation;

