import React, { useState } from "react";
import { TextField, Button, Container, Grid, Box } from "@mui/material";
import axios from "axios";
import BackAdmin from "./BackAdmin";

function NewsletterAdmin() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    axios
      .post(
        `${process.env.REACT_APP_API}/sendNewLetter`,
        { message },
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      )
      .then((response) => {
        console.log("Message envoyé avec succès !");
        setMessage("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du message :", error);
      });
  };

  return (
    <Container>
      <BackAdmin />
      <Grid
        container
        justifyContent="center"
        style={{ minHeight: "100%", width: "100%" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={7}>
          <Box p={3} boxShadow={3} borderRadius={4}>
            <h1>Newsletter admin</h1>
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={sendMessage}>
              Envoyer
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewsletterAdmin;
