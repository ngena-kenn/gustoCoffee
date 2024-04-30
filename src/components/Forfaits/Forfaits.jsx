// Fichier Forfaits.js
import { useState } from "react";
import { Link } from "react-router-dom";

const Forfaits = () => {
  const [forfaits] = useState([
    {
      name: "Découverte",
      description: "Vous donne accès aux 3 cafés du jours à la demande",
      description2: "Viennoiserie ou douceurs sucrée à la demande",
      price: "9 €",
    },
    {
      name: "Barista",
      description: "Vous donne accès aux toute la collection de cafés de Gusto Coffee à la demande",
      description2: "Viennoiserie ou douceurs sucrée à la demande",
      price: "18 €",
    },
  ]);

  

  return (
    <div className="list_forfaits">
      <div className="list_forfaits-cards">
        {forfaits.map((forfait, index) => (
          <div key={index} className="list_forfaits-card">
            <h2>Forfait <span>{forfait.name}</span></h2>
            <h3>{forfait.price}</h3>
            <p>{forfait.description}</p>
            <p>{forfait.description2}</p>
            <Link to="/reserver">
              Réserver
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forfaits;
