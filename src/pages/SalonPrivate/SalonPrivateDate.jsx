import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  setSelectedStartTimee,
  setSelectedEndTimee,
  setSelectedDate,
} from "../../store/reservation/reservationReducer";
import { format } from "date-fns";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../../store/reservation/reservationReducer";

function SalonPrivateDate() {
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const selectedDate = useSelector((state) => state.reservation.selectedDate);
  const [value, setValue] = useState(new Date(selectedDate));

  const dispatch = useDispatch();
  const selectedType = useSelector((state) => state.reservation.selectedType);
  const selectedPlace = useSelector((state) => state.reservation.selectedPlace);
  const selectedForfait = useSelector(
    (state) => state.reservation.selectedForfait
  );

  const userId = localStorage.getItem("id");

  const heures = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "22:00",
  ];

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

  const handleDateChange = (newValue) => {
    let formatedDate = moment(newValue).format("YYYY-MM-DD");
    setValue(newValue);
    dispatch(setSelectedDate(formatedDate));
  };

  const handleStartTimeClick = (startTime) => {
    dispatch(setSelectedStartTimee(startTime));
    setSelectedStartTime(startTime);
    setSelectedEndTime(null);
  };

  const handleEndTimeClick = (endTime) => {
    dispatch(setSelectedEndTimee(endTime));
    setSelectedEndTime(endTime);
  };

  const availableEndHours = heures.slice(heures.indexOf(selectedStartTime) + 1);

  return (
    <div className="selectDateTime">
      <Calendar
        formatShortWeekday={(locale, date) => format(date, "EEE", { locale })}
        formatMonthYear={(locale, date) =>
          format(date, "MMMM yyyy", { locale })
        }
        onChange={handleDateChange}
        value={value}
      />

      <div className="heure-buttons">
        <h4>Heure de début :</h4>
        {heures.map((heure, index) => (
          <Button
            key={index}
            variant={selectedStartTime === heure ? "contained" : "outlined"}
            onClick={() => handleStartTimeClick(heure)}
          >
            {heure}
          </Button>
        ))}
      </div>

      <div className="heure-buttons">
        <h4>Heure de fin :</h4>
        {selectedStartTime &&
          availableEndHours.map((heure, index) => (
            <Button
              key={index}
              variant={selectedEndTime === heure ? "contained" : "outlined"}
              onClick={() => handleEndTimeClick(heure)}
            >
              {heure}
            </Button>
          ))}
      </div>

      {selectedStartTime && selectedEndTime && (
        <div className="date-final">
          <p>Heure de début sélectionnée : {selectedStartTime}</p>
          <p>Heure de fin sélectionnée : {selectedEndTime}</p>
          <Button
            variant="contained"
            color="success"
            onClick={handleValidation}
          >
            Valider
          </Button>
        </div>
      )}
    </div>
  );
}

export default SalonPrivateDate;
