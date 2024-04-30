import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedForfait } from '../../store/reservation/reservationReducer';

function Formules() {
  const dispatch = useDispatch();
  const [formules, setFormules] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/formule/all`)
      .then((response) => response.json())
      .then((data) => {
        setFormules(data);
      })
      .catch((error) => {
        console.error("Error fetching formules:", error);
      });
  }, []);

  const handleFormuleSelection = (formuleId) => {
    dispatch(setSelectedForfait(formuleId.toString()));
  };

  return (
    <div className="list_forfaits">
      <div className="list_forfaits-cards">
        {formules.map((forfait) => (
          <div key={forfait.id} className="list_forfaits-card">
            <h3>Forfait <span>{forfait.nomFormule}</span></h3>
            <h3>{forfait.prix} €</h3>
            <p>{forfait.descriptionFormule}</p>
            <p>{forfait.description2}</p>
            <Link to="/reserver/formules/dates" onClick={() => handleFormuleSelection(forfait.id)}>
              Choisir
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formules;
