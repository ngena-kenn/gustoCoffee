import React, { Component } from "react";
import './commande/style.css';
import validation from './Home';
import { Link } from 'react-router-dom';
import './commande/style.css'
import { Button } from "@mui/material";

class Connexionn extends Component {
  render() {
    return (

      <div className="cont">
        <div className="inscription" >
          <div className="left" style={{width: '100%'}}>
            <h1>BIENVENUE !</h1>
            <p>Connectez-vous avec votre compte<br></br> pour nous rejoindre !</p>
            <form action="" className="form">
              <input type="email" placeholder="EmaiL" required ></input>
              <input type="password" placeholder="Mot de passe"></input>
            </form>
            <Link to="/home">
              <Button variant="outlined" style={{textDecoration: 'none', color: 'black'}} color="primary"  className="taggle1">
                se connecter
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
    );
  }

}
export default Connexionn;

