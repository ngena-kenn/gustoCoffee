// src/redux/slice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

let dateRedux = new Date();

const convertToDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const initialState = {
  selectedType: null,
  selectedForfait: null,
  selectedDate: convertToDate(dateRedux),
  selectedStartTime: null,
  selectedEndTime: null,
  selectedPlace: null,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSelectedForfait: (state, action) => {
      state.selectedForfait = action.payload;
    },
    setSelectedStartTimee: (state, action) => {
      state.selectedStartTime = action.payload;
    },
    setSelectedEndTimee: (state, action) => {
      state.selectedEndTime = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedPlace: (state, action) => {
      state.selectedPlace = action.payload;
    },
  },
});

export const createReservation = (reservationData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/api/reservation/create_reservation`,
      reservationData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.data.reservation_id) {
      const paymentUrl = `${process.env.REACT_APP_API}/paiement_success/${response.data.reservation_id}`;

      // Créer le paiement
      const link = await axios.get(paymentUrl, reservationData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (link.data.payment_url) {
        window.location.href = link.data.payment_url;
      } else {
        console.error("Le lien de paiement est manquant dans la réponse.");
      }
    } else {
      console.error(
        "L'identifiant de réservation est manquant dans la réponse."
      );
    }
  } catch (error) {
    if (error.response.status === 409) {
      toast.error(
        "Il y a déjà une réservation à cette date et heure. Choissisez une autre date ou heure."
      );
    }
  }
};

export const {
  setSelectedForfait,
  setSelectedStartTimee,
  setSelectedEndTimee,
  setSelectedDate,
  setSelectedPlace,
  setSelectedType,
} = reservationSlice.actions;
export default reservationSlice.reducer;
