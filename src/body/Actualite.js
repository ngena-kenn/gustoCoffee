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
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    
    <h1 class="card-title">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h1>
    <p class="card-text">Coworking allows workers to take their schedules and goals into their own hands to fit an ever-changing, chaotic global society. Read on to learn how remote workers and businesses of all sizes can take advantage of these benefits and more.</p>
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
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    
    <h2 class="card-title">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
    <p class="card-text">This is a wider card </p>
  </div>
</div>

          </div>
          <div class="demihaut" >
          <div class="card mb-3">
  <img src={benefitsofcoworking} class="card-img-top" alt="..."></img>
  <div class="card-body">
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    
    <h2 class="card-title">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
    <p class="card-text">This is a wider card </p>
  </div>
</div>

          </div>

      </div>


      
<div class="geolocalisation">

  <center>
    <h3>vous etes ici</h3>

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

