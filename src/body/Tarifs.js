import React, { Component } from "react";
import '../css/page.css';
import '../css/acceuil.scss';
import { Link} from 'react-router-dom';

class A_propos extends Component {
  render() {
    return (
      <div>
        <div className="titre" style={{padding:40}}>NOS FORFAITS</div>
        <div className="forme">
          <div className="forfait1 "></div>
          <div className="align">
            <div className="text2 textdeco">FORFAIT DECOUVERTE</div>
            <div className="text3 textdeco">Venez savourez les plaisir de Gusto Coffee</div>
            <div className="text4 textdeco">
              <p>Nous sélectionnons des produits frais et de qualité pour vous
                <br></br>proposer les meilleurs cafes ! Notre poisson est livré
                <br></br>et préparé tous les matins dans chacune de nos cuisines.</p>

              <p>ainsi nous vous proposont, 3 cafés du jours à la demande et des
                <br></br>Viennoiseries ou douceurs sucrée à la demande</p>

              <p>Chaque café est préparé à la minute, devant vos yeux. Et puis,
                <br></br> c'est bien meilleur quand tout est fraîchement préparé !</p></div>
                <Link to='/a_propos' class="link left" >Decouvrir</Link>
          </div>
        </div>
        <div className="forme">
          <div className="align">
            <div className="text2 textdeco">FORFAIT BARITAS</div>
            <div className="text3 textdeco">Chez Gusto Coffee, <br></br>nous vous proposont une multitudes de type de café  </div>
            <div className="text4 textdeco">
              <p>Nous nous engageons à être socialement et écologiquement
                <br></br>responsables !
              </p>

              <p>En effet, chaque cafés est préparé à la minute, devant vos yeux.
                <br></br>Et puis, c'est bien meilleur quand tout est fraîchement préparé.</p>

              <p>Nous mettons un point d'honneur à utiliser tous les produits
                <br></br>afin de ne rien gaspiller, notamment en adaptant
                <br></br>nos portions, nos recettes et nos pratiques.</p></div>
                <Link to='/a_propos' class="link left" >Decouvrir</Link>
          </div>
          <div className="forfait2 " ></div>
        </div>

      </div>

    )
  }
}
export default A_propos;