import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedPlace } from "../../store/reservation/reservationReducer";

function SalonPrivate() {
  const [salonsPrivate, setSalonsPrivate] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/espaces_de_travail_prives`)
      .then((response) => {
        setSalonsPrivate(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const handleChoose = (id) => {
    dispatch(setSelectedPlace(id));

    navigate(`/reserver/salons-private/formules`);
  };

  const CardSalon = ({ salon }) => {
    const imageSalonPrivate = `/salles/${salon.nomSalonPrivee}.png`;

    return (
      <div className="Salon-private">
        <div className="reserver-salon-prive">
          <div className="card-salon">
            {salon.nomSalonPrivee && (
              <img
                className="card-salon_img"
                src={imageSalonPrivate}
                alt={salon.nom}
              />
            )}
            <h5>
              {salon.nomSalonPrivee && (
                <>
                  <h2 className="card-salon_nom">{salon.nomSalonPrivee}</h2>
                  <h5 className="card-salon_description">
                    {salon.description}
                  </h5>
                </>
              )}
            </h5>
            <button onClick={() => handleChoose(salon.id, salon.type)}>
              Réserver
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="list-card-salons"
      style={{ width: "100%", marginTop: "50px" }}
    >
      {salonsPrivate.map((salon) => (
        <CardSalon key={salon.id} salon={salon} />
      ))}
    </div>
  );
}

export default SalonPrivate;
