import React, { Component } from "react";
import '../css/page.css';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

class Home_page extends Component {
  render() {
    return (
      <div>
        <div className="titre" >Decouvrir</div>
        <div className="menu">
          <div>
            <div className="formules aligne-center"></div>
            <Link className="text" to={'/home/formules'}>Formules</Link>
          </div>
          <div>
            <div className="gamme_chaude aligne-center"></div>
            <Link className="text" to={'/home/gamme_chaude'}>Gammes Chaudes</Link>
          </div>
          <div>
            <div className="poké_creation aligne-center"></div>
            <Link className="text" to={'/home/poke_creation'}>Poké Creation</Link>
          </div>
          <div>
            <div className="sides aligne-center"></div>
            <Link className="text" to={'/home/sides'}>Sides</Link>
          </div>
          <div>
            <div className="healthy_bowls aligne-center"></div>
            <Link className="text" to={'/home/healty_bowls'}>Healthy Bowls</Link>
          </div>
          <div>
            <div className="desserts aligne-center"></div>
            <Link className="text" to={'/home/desserts'}>Desserts</Link>
          </div>
          <div>
            <div className="boissons_chaudes aligne-center"></div>
             <Link className="text" to={'/home/boissons_chaudes'}>Boissons Chaudes</Link>
          </div>
          <div>
            <div className="bubble_tea aligne-center"></div>
            <Link className="text" to={'/home/bubble_tea'}>Bubble Tea</Link>
          </div>
          <div>
            <div className="boissons aligne-center"></div>
            <Link className="text" to={'/home/boissons'}>Boissons</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home_page;