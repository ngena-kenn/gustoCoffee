import React, { Component } from "react";
import '../css/page.css';

class A_propos extends Component {
  render() {
    return (
      <div>
        <div className="titre">Nos valeurs & concepts</div>
        <div className="valeur1"></div>
        <div className="forme">
          <div className="valeur2 aligne"></div>
          <div className="aligne">
            <div className="text1">Fresh food everyday</div>
            <div className="text2">LORSQUE BIO RIME AVEC QUALITÉ</div>
            <div className="text3">
              <p>Nous sélectionnons des produits frais et de qualité pour vous
                <br></br>proposer les meilleurs pokés ! Notre poisson est livré
                <br></br>et préparé tous les matins dans chacune de nos cuisines.</p>

              <p>De plus, nos légumes et nos fruits tropicaux sont choisis
                <br></br>avec soin afin de ravir les papilles de nos Pokawaïens.</p>

              <p>Chaque poké est préparé à la minute, devant vos yeux. Et puis,
                <br></br> c'est bien meilleur quand tout est fraîchement préparé !</p></div>
          </div>
        </div>
        <div className="forme">
          <div className="aligne">
            <div className="text1">Le gaspi c'est fini !</div>
            <div className="text2">CHEZ POKE BIO, <br></br>NOUS LUTTONS CONTRE LE GASPILLAGE ALIMENTAIRE </div>
            <div className="text3">
              <p>Nous nous engageons à être socialement et écologiquement
                <br></br>responsables !
              </p>

              <p>En effet, chaque poké est préparé à la minute, devant vos yeux.
                <br></br>Et puis, c'est bien meilleur quand tout est fraîchement préparé.</p>

              <p>Nous mettons un point d'honneur à utiliser tous les produits
                <br></br>afin de ne rien gaspiller, notamment en adaptant
                <br></br>nos portions, nos recettes et nos pratiques.</p></div>
          </div>
          <div className="valeur3 aligne"></div>
        </div>
        <div className="forme">
          <div className="valeur4 aligne" ></div>
          <div className="aligne">
            <div className="text1">Good vibes only</div>
            <div className="text2">“ALOHA” ANCRÉ CHEZ POKE BIO</div>
            <div className="text3">
              <p>Inutile de prendre l'avion pour arriver à Hawaï,
                <br></br>  atterrissez directement dans nos restaurants
                <br></br> et emparez-vous des good vibes poke bio !</p>

              <p>Chacun d'entre vous sera accueilli avec joie et amour.
                <br></br> Notre but est de partager un moment unique avec cette belle
                <br></br>  et grande communauté que nous formons.</p>

              <p>Et si vous veniez trinquer avec nous ?
                <br></br>Hipahipa, hulō ! (Santé ! en hawaïen)</p></div>
          </div>
        </div>



      </div>

    )
  }
}
export default A_propos;