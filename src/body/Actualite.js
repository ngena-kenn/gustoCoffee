import React, { Component } from "react";
import '../css/page.css';
import chaude from '../image/image3.png';
import benefitsofcoworking from '../image/Benefits-of-coworking-hero-1230x820.jpg.webp';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Link } from 'react-router-dom';
 import Home from "./maps";

 class Actualites extends Component {
  render() {
    return (
      <div style={{paddingTop: 120}}>

        

      <div class="surhaut" >
        <div class="soushaut"  >
          <div class ="encadrement" >
        <div class="card mb-3"  >
        <div class="card-body" >
  <p class="card-text"><small class="text-muted">Dernière mise à jour il y a 3 minutes</small></p>
    
    <h1 class="card-title">Il s'agit d'une carte plus large avec un texte de support ci-dessous comme introduction naturelle à du contenu supplémentaire. Ce contenu est un peu plus long.</h1>
    <p class="card-text">Le coworking permet aux travailleurs de prendre en main leurs horaires et leurs objectifs pour s'adapter à une société mondiale chaotique en constante évolution. Lisez la suite pour savoir comment les télétravailleurs et les entreprises de toutes tailles peuvent profiter de ces avantages et bien plus encore.</p>
  </div>
          
        </div>
        </div>
        </div>
        <div class="soushaut">
          <div class="imagedessous" > 
        <img src={benefitsofcoworking} class="img-fluid" alt="..."></img>
        </div>
        </div>
      </div>

      
      <div class="haut" >
          <div class="demihaut" >
          <div class="card mb-3">
  <img src={benefitsofcoworking} class="card-img-top" alt="..."></img>
  <div class="card-body">
  <p class="card-text"><small class="text-muted">Dernière mise à jour il y a 3 minutes</small></p>
    
    <h2 class="card-title">Il s'agit d'une carte plus large avec un texte de support ci-dessous comme introduction naturelle à du contenu supplémentaire. Ce contenu est un peu plus long.</h2>
    <p class="card-text">Ceci est une carte plus large </p>
  </div>
</div>

          </div>
          <div class="demihaut" >
          <div class="card mb-3">
  <img src={benefitsofcoworking} class="card-img-top" alt="..."></img>
  <div class="card-body">
  <p class="card-text"><small class="text-muted">Dernière mise à jour il y a 3 minutes</small></p>
    
    <h2 class="card-title">Il s'agit d'une carte plus large avec un texte de support ci-dessous comme introduction naturelle à du contenu supplémentaire. Ce contenu est un peu plus long.</h2>
    <p class="card-text">Ceci est une carte plus large </p>
  </div>
</div>

          </div>

      </div>


      
<div class="geolocalisation">

  <center>
    <h3>NOTRE LOCALISATION</h3>

  </center>

  <div>
    <center>
  <Home/>
  </center>
  </div>

</div>



      </div>
    )
  }
}


export default Actualites;

