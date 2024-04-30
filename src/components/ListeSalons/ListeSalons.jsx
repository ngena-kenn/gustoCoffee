import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedType } from "../../store/reservation/reservationReducer";

const ListeSalons = ({ salons }) => {
  return (
    <div className="list-card-salons">
      {salons.map((salon, index) => (
        <CardSalon key={index} salon={salon} />
      ))}
    </div>
  );
};

const CardSalon = ({ salon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigationPrincipal = () => {
    dispatch(setSelectedType("principal_room"));

    navigate("/reserver/formules");
  };

  const handleNavigationPrivate = () => {
    dispatch(setSelectedType("private_room"));

    navigate("/reserver/salons-private");
  };

  return (
    <div className="card-salon">
      {salon.nomSalonPrincipal && (
        <img className="card-salon_img" src={salon.image} alt={salon.nom} />
      )}
      {salon.nomSalonPrivate && (
        <img className="card-salon_img" src={salon.image} alt={salon.nom} />
      )}
      <h5>
        {salon.nomSalonPrincipal && (
          <div className="card-salon_nom">{salon.nomSalonPrincipal}</div>
        )}
        {salon.nomSalonPrivate && (
          <div className="card-salon_nom">{salon.nomSalonPrivate}</div>
        )}
      </h5>
            <p>
        {salon.nomSalonPrincipal && (
          <div className="card-salon_description">5€/H</div>
        )}
        {salon.nomSalonPrivate && (
          <div className="card-salon_description">12€/H</div>
        )}
      </p>
      {salon.nomSalonPrincipal && (
        <button onClick={handleNavigationPrincipal}>Réserver</button>
      )}
      {salon.nomSalonPrivate && (
        <button onClick={handleNavigationPrivate}>Réserver</button>
      )}
    </div>
  );
};

export default ListeSalons;
