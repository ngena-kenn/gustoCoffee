import logo from '../image/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import React from "react";
import '../css/page.css';
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navigation = ({ commande, setcommande, countProduct, setViewProduct, cmd, validateCommande }) => {
 const navigate = useNavigate()
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
                <Link to='/home' class="nav-link active">Accueil</Link>
              </li>
              <li class="nav-item">
                <Link to='/menu' class="nav-link">Menu</Link>
              </li>
              <li class="nav-item">
                <Link to='/a_propos' class="nav-link" >A propos</Link>
              </li>
              <li class="nav-item">
                <Link to='/actualite' class="nav-link">Actualité</Link>
              </li>
              <li class="nav-item">
                <Link to='/franchise' class="nav-link">Franchise</Link>
              </li>

              <li class="nav-item">
                <div onClick={() => {
                  setViewProduct(prev => !prev)
                }}>
                  <Badge badgeContent={countProduct} style={{ cursor: "pointer", padding: '10px', marginRight: 20 }} color="success">
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </div>
              </li>
              <li class="nav-item" style={{paddingBottom: 10}}>
                <div style={{paddingLeft: 10,}}>
                  <Button variant='outlined' color='success' disabled={cmd} onClick={() => {
                    commande ? validateCommande() :
                      setcommande()
                  }}
                  >{commande ? 'Valider' : 'Commander'} </Button>
                </div>
              </li>
              {/* <li class="nav-item">
                <div style={{paddingLeft: 10, paddingBottom: 10}}>
                  <Button onClick={() => {
                    navigate('/connect')
                  }} variant='outlined' color='success'  
                  >Connexion </Button>
                </div>
              </li> */}
              <li class="nav-item">
                <div style={{ paddingLeft: 10, paddingBottom: 10}}>
                  <Button onClick={() => {
                    navigate('/login')
                  }} variant='outlined' color='success'  
                  >Connexion</Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Navigation;


{/* <nav className="header" style={{
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.753)', position: 'fixed',
  width: '100%', zIndex: 99999, top: 0, backgroundColor: 'white', marginBottom: 50
}}>
  <div className="logo">
    <img src={logo} className="logo" alt="logo" />
  </div>
  <div className="another">
    <div>
      <Link to='/home'>home</Link>
    </div>
    <div>
      <Link to='/restaurant'>restaurant</Link>
    </div>
    <div>
      <Link to='/a_propos'>a propos</Link>
    </div>
    <div>
      <Link to='/actualite'>actualité</Link>
    </div>
    <div>
      <Link to='/franchise'>franchise</Link>
    </div>
  </div>
  <div className="connectt">
    <Button variant='outlined' color='success'><Link to='/login'>connexion</Link></Button>
  </div>
  <div onClick={() => {
    setViewProduct(prev => !prev)
  }}>
    <Badge badgeContent={countProduct} style={{ cursor: "pointer" }} color="success">
      <ShoppingCartIcon color="action" />
    </Badge>
  </div>
  <div className="connect">
    <Button variant='outlined' color='success' disabled={cmd} onClick={() => {
      commande ? validateCommande() :
        setcommande()
    }}
    >{commande ? 'Valider' : 'Commander'} </Button>
  </div>
</nav> */}