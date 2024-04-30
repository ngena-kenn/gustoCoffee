import React, { useState } from "react";
import axios from "axios";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    sujet: "",
    messages: "",
    nom: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${process.env.REACT_APP_API}/contact/create_messages`,
        formData
      );
      toast.success("Votre message a bien été envoyé !");

      setFormData({
        email: "",
        sujet: "",
        messages: "",
        nom: "",
      });
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi du message.");
    }
  };

  return (
    <Container className="contact-form" maxWidth="md">
      <Helmet>
        <title>Contactez-nous - Gusto Coffee</title>
        <meta
          name="description"
          content="Contactez-nous chez Gusto Coffee. Envoyez-nous un message avec votre nom, email et sujet. Nous serions ravis de vous entendre !"
        />
      </Helmet>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "115px", width:"50%", marginLeft:"26rem", marginBottom:"10rem" }}>
        <Typography variant="h4" gutterBottom>
          Contactez-nous
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nom"
            name="nom"
            fullWidth
            margin="normal"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Sujet"
            name="sujet"
            fullWidth
            margin="normal"
            value={formData.sujet}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="messages"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={formData.messages}
            onChange={handleChange}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Envoyer
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Contact;
