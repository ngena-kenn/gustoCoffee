import React, { Component } from "react";
import './commande/style.css';
import validation from './Home';
import { Link } from 'react-router-dom';
import './commande/style.css'

class Connexionn extends Component{
    render(){
        return (
            
            <div class="container">
                <div class="inscription">
                    <div class="left">
                        <h1>BIENVENUE !</h1>
                        <p>Connectez-vous avec votre compte<br></br> pour nous rejoindre !</p>
                        <form action="" class="form">
                            <input type="email" placeholder="EmaiL" required ></input>
                            <input type="password" placeholder="Mot de passe"></input>
                        </form> 
                        <button class="taggle1"><a href="./home">se connecter</a></button>
                    </div>
                </div>
            </div>
            


        );
    }

}
export default Connexionn;
 
