import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import BackAdmin from "./BackAdmin";

const ListUser = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);

  const toggleActivationUtilisateur = (id, status, index) => {
    setUtilisateurs((prevUtilisateurs) =>
      prevUtilisateurs.map((utilisateur, i) =>
        i === index ? { ...utilisateur, isToggling: true } : utilisateur
      )
    );

    const apiUrl = status
      ? `${process.env.REACT_APP_API}/api/user/disable_user_account/${id}`
      : `${process.env.REACT_APP_API}/api/user/enable_user_account/${id}`;

    axios
      .put(apiUrl, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUtilisateurs((prevUtilisateurs) =>
          prevUtilisateurs.map((utilisateur, i) =>
            i === index
              ? { ...utilisateur, status: !status, isToggling: false }
              : utilisateur
          )
        );
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'activation/désactivation du compte utilisateur :",
          error
        );
        setUtilisateurs((prevUtilisateurs) =>
          prevUtilisateurs.map((utilisateur, i) =>
            i === index ? { ...utilisateur, isToggling: false } : utilisateur
          )
        );
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/user/listes_user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUtilisateurs(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });
  }, []);

  return (
    <div
      style={{
        marginTop: "100px",
        textAlign: "center",
        width: "500px",
        margin: "0 auto",
      }}
    >
      <BackAdmin />
      <h1>Listes des utilisateurs</h1>
      <List>
        {utilisateurs.map((utilisateur, index) => (
          <ListItem key={utilisateur.id}>
            <ListItemText
              primary={utilisateur.nom}
              secondary={utilisateur.prenom}
            />
            <ListItemSecondaryAction>
              <Button
                variant="outlined"
                color={utilisateur.status ? "error" : "success"}
                size="small"
                onClick={() =>
                  toggleActivationUtilisateur(
                    utilisateur.id,
                    utilisateur.status,
                    index
                  )
                }
                disabled={utilisateur.isToggling}
              >
                {utilisateur.status ? "Désactiver" : "Activer"}
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListUser;
