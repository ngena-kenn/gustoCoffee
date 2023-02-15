import React, { Component } from "react";
import '../css/page.css';
import '../components/containerPage/containerPage.scss'
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

class Home_page extends Component {
  render() {
    return (
      <div className="grid" style={{marginTop: 50}}>
        <div className="titre" >Decouvrir</div>
        <div className="grille">
          <div>
            <div className="formules aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/formules'}>Formules</Link>
          </div>
          <div>
            <div className="gamme_chaude aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/gamme_chaude'}>Gammes Chaudes</Link>
          </div>
          <div>
            <div className="poké_creation aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/poke_creation'}>Poké Creation</Link>
          </div>
          <div>
            <div className="sides aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/sides'}>Sides</Link>
          </div>
          <div>
            <div className="healthy_bowls aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/healty_bowls'}>Healthy Bowls</Link>
          </div>
          <div>
            <div className="desserts aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/desserts'}>Desserts</Link>
          </div>
          <div>
            <div className="boissons_chaudes aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/boissons_chaudes'}>Boissons Chaudes</Link>
          </div>
          <div>
            <div className="bubble_tea aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/bubble_tea'}>Bubble Tea</Link>
          </div>
          <div>
            <div className="boissons aligne-center" style={{height: 165}}></div>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/boissons'}>Boissons</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home_page;