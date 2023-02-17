import React, { Component } from "react";
import '../css/page.css';
import '../components/containerPage/containerPage.scss'
import { Link } from 'react-router-dom';

class Home_page extends Component {
  render() {
    return (
      <div className="grid" style={{paddingTop: 80}}>
        <div className="titre" >Découvrir</div>
        <div className="grille">
          <div>
            <Link to={'/home/formules'}><div className="formules aligne-center" style={{height: 165}}></div></Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/formules'}>Formules</Link>
          </div>
          <div>
          <Link to={'/home/gamme_chaude'}>
            <div className="gamme_chaude aligne-center" style={{height: 165}}></div>
          </Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/gamme_chaude'}>Gamme Chaude</Link>
          </div>
          <div>
            <Link to={'/home/poke_creation'}>
             <div className="poké_creation aligne-center" style={{height: 165}}></div>
            </Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/poke_creation'}>Poké Création</Link>
          </div>
          <div>
            <Link to={'/home/sides'}>
             <div className="sides aligne-center" style={{height: 165}}></div>
            </Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/sides'}>Sides</Link>
          </div>
          <div>
            <Link to={'/home/healty_bowls'}>
            <div className="healthy_bowls aligne-center" style={{height: 165}}></div>
            </Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/healty_bowls'}>Healthy Bowls</Link>
          </div>
          <div>
            <Link to={'/home/desserts'}>
            <div className="desserts aligne-center" style={{height: 165}}></div>
            </Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/desserts'}>Desserts</Link>
          </div>
          <div>
            <Link to={'/home/boissons_chaudes'}>
            <div className="boissons_chaudes aligne-center" style={{height: 165}}></div>
            </Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/boissons_chaudes'}>Boissons Chaudes</Link>
          </div>
          <div>
            <Link to={'/home/bubble_tea'}>
            <div className="bubble_tea aligne-center" style={{height: 165}}></div>
            </Link>
            <Link style={{
              textDecoration: 'none',
              fontSize: 27,
              display: 'flex',
              justifyContent: 'center',
              color: 'black'
            }} to={'/home/bubble_tea'}>Bubble Tea</Link>
          </div>
          <div>
            <Link to={'/home/boissons'}>
            <div className="boissons aligne-center" style={{height: 165}}></div>
            </Link>
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