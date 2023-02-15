import React, { Component } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
class Authentification extends Component {
  render() {
    return (

      <div className="container">
        <div className="inscription">
          <div className="left">
            <h1>Bon retour !</h1>
            <p>Connectez-vous avec votre compte<br></br> pour nous rejoindre !</p>
            <Button variant="outlined" color="info"  className="">
              <Link to="/connect"style={{textDecoration: 'none', color: 'black'}}>se connecter</Link>
              </Button>
          </div>
          <div style={{width: '40%', marginBottom: 10}}>
            <h1>Créer un compte</h1>
            <div className="social_media">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-Linkedin-in"></i>
            </div>
            <form action="" className="form">
              <input type="text" placeholder="Pseudo"></input>
              <input type="email" placeholder="EmaiL"></input>
              <input type="password" placeholder="Mot de passe"></input>
              <input type="password" placeholder="Confirmez mot de passe"></input>
              <Button variant="outlined" color="info">
                <Link to="/home" style={{textDecoration: 'none', color: 'black'}}>s'incrire</Link>
              </Button>

            </form>
          </div>
        </div>
      </div>



    )
  }

}
export default Authentification;
