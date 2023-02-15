import { Link } from 'react-router-dom';
import React from "react";
import logo from '../image/Logo.png';
import '../css/page.css';
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navigation = ({ commande, setcommande, countProduct, setViewProduct, cmd, validateCommande }) => {
  const handleclose = () => {
    return false
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div className="navbar-brand"  style={{padding: 0}}>
            <Link to={"/home"}>
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/home' class="nav-link active">home</Link>
              </li>
              <li class="nav-item">
                <Link to='/restaurant' class="nav-link">restaurant</Link>
              </li>
              <li class="nav-item">
                <Link to='/a_propos' class="nav-link" >a propos</Link>
              </li>
              <li class="nav-item">
                <Link to='/actualite' class="nav-link">actualité</Link>
              </li>
              <li class="nav-item">
                <Link to='/franchise' class="nav-link">franchise</Link>
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
              <li class="nav-item">
                <div >
                  <Button variant='outlined' color='success' disabled={cmd} onClick={() => {
                    commande ? validateCommande() :
                      setcommande()
                  }}
                  >{commande ? 'Valider' : 'Commander'} </Button>
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