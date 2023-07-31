import { Link } from 'react-router-dom';
import React from "react";


const successPay = () => {
    return (
      <div className="not-found">
        <h2>MERCI DE VOTRE RESERVATION</h2>
        <p>retourner a l'acceuil</p>
        <li class="nav-item">
                <Link to='./home' class="nav-link active">retour</Link>
              </li>
      </div>
    );
  };
  
  export default successPay;