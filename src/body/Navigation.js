import { Link } from 'react-router-dom';
import React from "react";
import logo from '../image/Logo.png';
import '../css/page.css';
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navigation = ({ commande, setcommande, countProduct, setViewProduct }) => {
  return (
    <nav className="header" style={{
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
      <div onClick={() => {
        setViewProduct(prev => !prev)
      }}>
        <Badge badgeContent={countProduct} style={{cursor: "pointer"}} color="success">
          <ShoppingCartIcon color="action"/>
        </Badge>
      </div>
      <div className="connect">
        <Button variant='outlined' color='success' onClick={setcommande}
        >{commande ? 'Valider' : 'Commander'} </Button>
      </div>
    </nav>
  );
}

export default Navigation;