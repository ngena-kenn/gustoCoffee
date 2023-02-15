import React, { Component } from "react";
import './style.css';
import { Link } from 'react-router-dom';

class Authentification extends Component{
    render(){
        return (
            
            <div class="container">
                <div class="inscription">
                    <div class="left">
                        <h1>Bon retour !</h1>
                        <p>Connectez-vous avec votre compte<br></br> pour nous rejoindre !</p> 
                        <button class="taggle1"><a href="./connect">se connecter</a></button>
                    </div>
                    <div class="right">
                        <h1>Créer un compte</h1> 
                        <div class="social_media">
                            <i class="fa-brands fa-facebook-f"></i> 
                            <i class="fa-brands fa-google-plus-g"></i> 
                            <i class="fa-brands fa-Linkedin-in"></i>
                        </div>
                        <form action="" class="form">
                            <input type="text" placeholder="Pseudo"></input>
                            <input type="email" placeholder="EmaiL"></input>
                            <input type="password" placeholder="Mot de passe"></input>
                            <input type="password" placeholder="Confirmez mot de passe"></input>
                            <button><a href="./home">s'incrire</a> </button>

                        </form>
                    </div>
                </div>
            </div>
            


        )
    }

}
export default Authentification;
