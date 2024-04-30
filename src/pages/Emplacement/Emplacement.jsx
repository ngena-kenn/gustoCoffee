import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../../store/reservation/reservationReducer";
import { setSelectedPlace } from "../../store/reservation/reservationReducer";
import { useEffect } from "react";

const Emplacement = () => {
  const [selectedEmplacement, setSelectedEmplacement] = useState("");
  const [rooms, setRooms] = useState([]);

  const dispatch = useDispatch();

  const selectedPlace = useSelector((state) => state.reservation.selectedPlace);
  const selectedDate = useSelector((state) => state.reservation.selectedDate);
  const selectedStartTime = useSelector(
    (state) => state.reservation.selectedStartTime
  );
  const selectedType = useSelector((state) => state.reservation.selectedType);
  const selectedEndTime = useSelector(
    (state) => state.reservation.selectedEndTime
  );
  const selectedForfait = useSelector(
    (state) => state.reservation.selectedForfait
  );

  const userId = localStorage.getItem("id");

  const [isPlaceSelected, setIsPlaceSelected] = useState(false);

  const handleEmplacementSelection = (emplacement) => {
    dispatch(setSelectedPlace(emplacement.toString()));
    setSelectedEmplacement(emplacement);
    setIsPlaceSelected(true);
  };

  const handleValidation = () => {
    const reservationData = {
      date: selectedDate,
      heure_de_debut: selectedStartTime,
      heure_de_fin: selectedEndTime,
      id_formule: selectedForfait,
      id_user: userId,
      effectif: "0",
      id_espace_de_travail: selectedPlace,
      type_espace_de_travail: selectedType,
    };
    dispatch(createReservation(reservationData));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/espaces_de_travail_salon_principal`)
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, []);

  return (
    <div className="emplacement">
      <h1>Salon Amazonie</h1>
      <div className="emplacement_places">
        {rooms.map((room) => (
          <Button
            key={room.id}
            variant="contained"
            onClick={() => handleEmplacementSelection(room.id)}
            sx={{
              backgroundColor:
                selectedEmplacement === room.id ? "blue" : "gray",
              color: "white",
              padding: "10px",
              margin: "5px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {room.nomSalonPrincipal}
          </Button>
        ))}
      </div>

      {isPlaceSelected && (
        <Button variant="contained" color="success" onClick={handleValidation}>
          Procéder au paiement
        </Button>
      )}
    </div>
  );
};

export default Emplacement;
