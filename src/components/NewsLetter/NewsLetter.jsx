import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

function NewsletterSignup() {
  const [formData, setFormData] = useState({ email: "" });
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/newletter`,
        formData
      );

      if (response.status === 201) {
        toast.success("Vous êtes inscrit à la newsletter !");
        setSubscribed(true);
      }
    } catch (error) {
      toast.error("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  return (
    <Paper
      style={{
        padding: "16px",
        maxWidth: "50%",
        minWidth: "60%",
        margin: "0 auto",
      }}
    >
      {subscribed ? (
        <Typography variant="h6">
          Merci pour votre inscription à notre newsletter !
        </Typography>
      ) : (
        <form
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Inscription à la newsletter</Typography>
          <TextField
            label="Adresse e-mail"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            style={{ background: "#836349" }}
          >
            S'inscrire
          </Button>
        </form>
      )}
    </Paper>
  );
}

export default NewsletterSignup;
