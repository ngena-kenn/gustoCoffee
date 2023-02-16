import React, { Component } from "react";
import '../css/page.css';
import { Link } from 'react-router-dom';

class Actualites extends Component {
  render() {
    return (
      <div>
        <div className="titre" >Actualités</div>
        <div className="actu_bg"></div>
        <div className="forme">
          <div>
            <div className="actu1 aligne-center"></div>
            <div className="text2">Le Bol by Arnaud Baptiste 🧑🏻‍🍳</div>
            <div className="text4">Un tout nouveau bowl aux saveurs françaises, 
                <br></br>porté par la personnalité et la créativité 
                du Chef Arnaud Baptiste !</div>
            <Link className="text" to={'/a_propos'}>EN SAVOIR PLUS</Link>
          </div>
          <div>
            <div className="actu2 aligne-center"></div>
            <div className="text2">Campagne de Noël 2021 : BE POKE BIO ! 🎄</div>
            <div className="text4">Notre objectif ? Être le Père Noël 2.0 et<br></br>
                 créer un mouvement d'amour à travers l'humour 🎅🏻</div>
            <Link className="text" to={'/a_propos'}>EN SAVOIR PLUS</Link>
          </div>
          <div>
            <div className="actu3 aligne-center"></div>
            <div className="text2">Départ imminent vers Bali🌺</div>
            <div className="text4">Poke bio fait une escale à Bali le temps d’un printemps, 
                <br></br>alors ready pour le décollage ? ✈️ </div>
            <Link className="text" to={'/a_propos'}>EN SAVOIR PLUS</Link>
          </div>
          <div>
            <div className="actu4 aligne-center"></div>
            <div className="text2">Poke bio fait son chaud 🔥</div>
            <div className="text4">Une toute nouvelle gamme pour affronter l'hiver en douceur 😋</div>
            <Link className="text" to={'/a_propos'}>EN SAVOIR PLUS</Link>
          </div>
          <div>
            <div className="actu5 aligne-center"></div>
            <div className="text2">LA MARCHE TRÈS ROSE 🎗</div>
            <div className="text4">La Team Poke bio soutient Octobre Rose !</div>
            <Link className="text" to={'/a_propos'}>EN SAVOIR PLUS</Link>
          </div>
          <div>
            <div className="actu6 aligne-center"></div>
            <div className="text2">POKE BIO DANS TON SALON 📺</div>
            <div className="text4">Patron Incognito sur M6 : immersion dans les coulisses de Poke bio</div>
            <Link className="text" to={'/a_propos'}>EN SAVOIR PLUS</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Actualites;