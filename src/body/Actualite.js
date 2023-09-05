import React, { Component } from "react";
import '../css/page.css';
import '../css/page.scss';
import chaude from '../image/image3.png';
import benef1 from '../image/actualité1.PNG';
import benef2 from '../image/actualité2.PNG';
import benef3 from '../image/actualité4.PNG';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Link } from 'react-router-dom';
 import Home from "./maps";
 import { motion } from 'framer-motion'

 const Actualites = ()=> {
    
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
      
      
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

    return (
      <div className="coverEvent">
      <div style={{paddingTop: 120}}>
              <motion.div className="text-block" initial="initial" animate={{x:[0, 200,200,0],}} transition={{repeat: Infinity, duration: 3}}>
            <h2>Café coworking, coffee shop, coworking : lequel choisir ?</h2>
          <p>Vous êtes freelance, étudiant ou salarié en télétravail, et vous en avez marre de bosser à la maison toute la journée ? En réalité, de nombreux lieux extérieurs vous accueillent à bras ouverts. On pense bien sûr aux coffee shops et aux coworkings. </p> </motion.div>
      <div class="surhaut" >
        <div class="soushaut">
          <div class ="encadrement" >
        <div class="card mb-3"  >
        <div class="card-body" >
  <p class="card-text"><small class="text-muted">Dernière mise à jour il y a 3 minutes</small></p>
    
    <h1 class="card-title">L’Espace a été pensé pour permettre la tranquilité de la réflexion ainsi que la bonne circulation des personnes. En assise normale, haute, banquette, ou canapé chill,</h1>
    <p class="card-text">vous pourrez y changer en fonction de vos envies et Vous disposez de tout le nécessaire pour travailler et être productif : wifi sécurisé, prises électriques, imprimante, scanner..</p>
  </div>            
          
        </div>
        </div>
        </div>
        <div class="soushaut">
          <div class="imagedessous" > 
        <img src={benef2} class="img-fluid" alt="..."></img>
        </div>
        </div>
      </div>

      
      <div class="haut" >
          <div class="demihaut" >
          <div class="card mb-3">
  <img src={benef1} class="card-img-top" alt="..."></img>
  <div class="card-body">
  <p class="card-text"><small class="text-muted">Dernière mise à jour il y a 3 minutes</small></p>
    
    <h2 class="card-title">Situé dans le 5ème arrondissement de Paris, au 11 rue de l’école Polytechnique, à côté du Panthéon, proche des bibliothèques universitaires. Arnold vous acceuil</h2>
    <p class="card-text">Le café by Arnaud Baptiste 🧑🏻‍🍳</p>
  </div>
</div>

          </div>
          <div class="demihaut" >
          <div class="card mb-3">
  <img src={benef3} class="card-img-top" alt="..."></img>
  <div class="card-body">
  <p class="card-text"><small class="text-muted">Dernière mise à jour il y a 3 minutes</small></p>
    
    <h2 class="card-title">Gusto Coffee fait une escale à Bali le temps dun printemps, alors ready pour le décollage ? Gusto Coffee Coworking vous accueille dans son espace de coworking végétalisé.</h2>
    <p class="card-text">Départ imminent vers Bali🌺 </p>
  </div>
</div>

          </div>

      </div>


      
<div class="geolocalisation">

  <motion.center initial="initial" animate={{x:[0, 150,150,0],}} transition={{repeat: Infinity, duration: 3}} className="text-block">
    <h2 className="localiser">NOTRE LOCALISATION</h2>

  </motion.center>

  <div>
    <center>
  <Home/>
  </center>
  </div>

</div>

</div>      
</div>

    )
}


export default Actualites;

