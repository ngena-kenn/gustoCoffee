import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import { format } from "date-fns";

const ReservationList = () => {
  const [userReservations, setUserReservations] = useState([]);

  const fetchUserReservations = async () => {
    const userId = localStorage.getItem("id");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/reservation/user_reservation/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserReservations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteReservation = async (reservationId) => {
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
      fetchUserReservations();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserReservations();
  }, []);

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={{
        boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.2)",
        width: "90%",
        margin: "0 auto",
        marginTop: "50px",
        margin:"88px",
      }}
    >
      Listes des réservations
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Heure de début</TableCell>
            <TableCell>Heure de fin</TableCell>
            <TableCell>Prix</TableCell>
            <TableCell>Salle</TableCell>
            <TableCell>Réservation</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(userReservations) && userReservations.length > 0 ? (
            userReservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>
                  {format(new Date(reservation.date), "dd-MM-yyyy")}
                </TableCell>
                <TableCell>{reservation.heureDeDebut}</TableCell>
                <TableCell>{reservation.heureDeFin}</TableCell>
                <TableCell>{reservation.prixReservation} €</TableCell>
                <TableCell>
                  {reservation.espacedetravail.salonPrincipals.length > 0
                    ? reservation.espacedetravail.salonPrincipals[0]
                        .nomSalonPrincipal
                    : reservation.espacedetravail.salonPrivees[0].nomSalonPrivee}
                </TableCell>
                {reservation.status === true ? (
                  <TableCell style={{ color: "green" }}>
                    Réservation payée
                  </TableCell>
                ) : (
                  <TableCell style={{ color: "red" }}>
                    Réservation non payée
                  </TableCell>
                )}
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteReservation(reservation.id)}
                  >
                    Annuler la réservation
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7}>Aucune réservation trouvée</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservationList;
