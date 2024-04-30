import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setSelectedStartTimee,
  setSelectedEndTimee,
  setSelectedDate,
} from "../../store/reservation/reservationReducer";
import { useSelector } from "react-redux";
import { format } from 'date-fns';
import moment from 'moment';

function SelectDateTime() {
  const dispatch = useDispatch();
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const selectedDate = useSelector((state) => state.reservation.selectedDate);
  const [value, setValue] = useState(new Date(selectedDate));

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

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/reserver/formules/dates/emplacement");
  };

  const handleDateChange = (newValue) => {
    let formatedDate = moment(newValue).format('YYYY-MM-DD');
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
        formatShortWeekday={(locale, date) => format(date, 'EEE', { locale })}
        formatMonthYear={(locale, date) => format(date, 'MMMM yyyy', { locale })}
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
            onClick={handleNavigation}
          >
            Valider
          </Button>
        </div>
      )}
    </div>
  );
}

export default SelectDateTime;
