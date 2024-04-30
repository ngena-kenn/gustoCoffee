import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ReservationUtilisateur.css";
import BackAdmin from "./BackAdmin";

const ReservationsUtilisateur = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/reservation/reservations`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setReservations(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des réservations :",
          error
        );
      }
    };

    fetchReservations();
  }, []);

  const handleCancelReservation = async (reservationId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API}/api/reservation/reservation/${reservationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setReservations((prevReservations) =>
        prevReservations.filter(
          (reservation) => reservation.id !== reservationId
        )
      );
    } catch (error) {
      console.error("Erreur lors de l'annulation de la réservation :", error);
    }
  };

  return (
    <div className="container">
      <BackAdmin />
      <h1>Liste des réservations des utilisateurs</h1>
      <table>
        <thead>
          <tr>
            <th>Utilisateur</th>
            <th>Salle de réunion</th>
            <th>Date</th>
            <th>Heure de début</th>
            <th>Heure de fin</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>
                {reservation.User.nom} {reservation.User.prenom}
              </td>
              {reservation.espacedetravail.salonPrincipals.length > 0 ? (
                <td>
                  Salon Principal:{" "}
                  {
                    reservation.espacedetravail.salonPrincipals[0]
                      .nomSalonPrincipal
                  }
                </td>
              ) : (
                <td>
                  Salon Privée:{" "}
                  {reservation.espacedetravail.salonPrivees[0].nomSalonPrivee}
                </td>
              )}

              <td>{reservation.date}</td>
              <td>{reservation.heureDeDebut}</td>
              <td>{reservation.heureDeFin}</td>
              {reservation.status === false ? (
                <td>Réservation non payée</td>
              ) : (
                <td>Réservation payée</td>
              )}
              <td>
                <button
                  className="admin-reservation-button"
                  onClick={() => handleCancelReservation(reservation.id)}
                >
                  Annuler
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsUtilisateur;
