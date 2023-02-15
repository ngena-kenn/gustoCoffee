import React, { Component } from "react";
import '../css/page.css';
import logo from '../image/Logo.png';
import { Link } from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (
      <nav className="header" style={{boxShadow: '0 0 5px rgba(0, 0, 0, 0.753)' }}>
        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="another">
          <div>
            <Link to='/home'>home</Link>
          </div>
          <div>
            <Link to='/restaurant'>restaurant</Link>
          </div>
          <div>
            <Link to='/a_propos'>a propos</Link>
          </div>
          <div>
            <Link to='/actualite'>actualité</Link>
          </div>
          <div>
            <Link to='/franchise'>franchise</Link>
          </div>
        </div>
        <div className="connect">
            <Link to='/login'>connection<br></br>/inscription</Link>
          </div>
        <div className="connect">
          <Link to='/commander'>commander</Link>
        </div>
      </nav>
    );
  }

}
export default Navigation;