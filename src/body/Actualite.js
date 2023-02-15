import React, { Component } from "react";
import '../css/page.css';
import { Link } from 'react-router-dom';

class Actualites extends Component {
  render() {
    return (
      <div>
        <div className="titre" >Actualités</div>
        <div className="actu_bg"></div>
        <div className="menu">
          <div>
            <div className="actu1 aligne-center"></div>
            <div>Le Bol by Arnaud Baptiste</div>
            <div>Un tout nouveau bowl aux saveurs françaises, 
                porté par la personnalité et la créativité 
                du Chef Arnaud Baptiste !</div>
            <Link className="text" to={'/a_propos'}>EN SAVOIR PLUS</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Actualites;