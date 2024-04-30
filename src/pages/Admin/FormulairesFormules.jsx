import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
} from "@mui/material";
import axios from "axios";
import BackAdmin from "./BackAdmin";

const FormulaireFormules = () => {
  const [formulaire, setFormulaire] = useState({
    nom_formule: "",
    descriptionFormule: "",
    description2: "",
    prix: "",
  });

  const [formules, setFormules] = useState([]);
  const [formuleEnEdition, setFormuleEnEdition] = useState(null);

  useEffect(() => {
    chargerFormules();
  }, []);

  const chargerFormules = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/formule/all`
      );
      setFormules(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des formules:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (
      name === "description2" ||
      name === "prix" ||
      name === "nom_formule" ||
      name === "descriptionFormule"
    ) {
      setFormulaire((prevFormulaire) => ({
        ...prevFormulaire,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/formule/create_formule`,
        formulaire,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFormules([...formules, response.data]);
      setFormulaire({
        nom_formule: "",
        descriptionFormule: "",
        description2: "",
        prix: 0,
      });
    } catch (error) {
      console.error("Erreur lors de la création de la formule:", error);
    }
  };

  const supprimerFormule = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/formule/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFormules(formules.filter((formule) => formule.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la formule:", error);
    }
  };

  const ouvrirEditionFormule = (formule) => {
    setFormuleEnEdition(formule);
  };

  const fermerEditionFormule = () => {
    setFormuleEnEdition(null);
  };

  const handleChangeEdition = (event) => {
    const { name, value } = event.target;
    setFormuleEnEdition((prevFormule) => ({
      ...(prevFormule || {}),
      [name]: value,
    }));
  };

  const handleSubmitEdition = async (event) => {
    event.preventDefault();
    try {
      if (formuleEnEdition) {
        const response = await axios.put(
          `${process.env.REACT_APP_API}/formule/update_formule/${formuleEnEdition.id}`,
          formuleEnEdition,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        mettreAJourFormule(response.data);
        fermerEditionFormule();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la formule:", error);
    }
  };

  const mettreAJourFormule = (formuleMiseAJour) => {
    setFormules((prevFormules) =>
      prevFormules.map((formule) =>
        formule.id === formuleMiseAJour.id ? { ...formuleMiseAJour } : formule
      )
    );
  };

  return (
    <Container className="mt-5">
      <BackAdmin />
      <h1>Administration des formules</h1>
      <div style={{ width: "100%" }}>
        <h2>Création de formule</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nom de la formule"
            name="nom_formule"
            value={formulaire.nom_formule}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          <TextField
            label="Description de la formule"
            name="descriptionFormule"
            value={formulaire.descriptionFormule}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            multiline
          />

          <TextField
            label="Description 2 de la formule"
            name="description2"
            value={formulaire.description2}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            multiline
          />

          <TextField
            label="Prix de la formule"
            name="prix"
            type="number"
            value={formulaire.prix}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            type="submit"
            color="success"
            className="mt-3"
          >
            Soumettre
          </Button>
        </form>

        <TableContainer component={Paper} className="mt-4">
          <h2>Liste des formules créées</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Description 2</TableCell>
                <TableCell>Prix</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formules.map((formule) => (
                <TableRow key={formule.id}>
                  <TableCell>{formule.nomFormule}</TableCell>
                  <TableCell>{formule.descriptionFormule}</TableCell>
                  <TableCell>{formule.description2}</TableCell>
                  <TableCell>{formule.prix}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => ouvrirEditionFormule(formule)}
                      style={{ marginBottom: "8px" }}
                    >
                      Modifier
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => supprimerFormule(formule.id)}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={!!formuleEnEdition} onClose={fermerEditionFormule}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              marginTop: "16px",
              background: "white",
            }}
          >
            <h2>Modifier la formule</h2>
            {formuleEnEdition && (
              <form onSubmit={handleSubmitEdition}>
                <TextField
                  label="Nom de la formule"
                  name="nom_formule"
                  value={formuleEnEdition.nomFormule}
                  onChange={handleChangeEdition}
                  required
                  fullWidth
                  margin="normal"
                />

                <TextField
                  label="Description de la formule"
                  name="descriptionFormule"
                  value={formuleEnEdition.descriptionFormule}
                  onChange={handleChangeEdition}
                  required
                  fullWidth
                  margin="normal"
                  multiline
                />

                <TextField
                  label="Description 2 de la formule"
                  name="description2"
                  value={formuleEnEdition.description2}
                  onChange={handleChangeEdition}
                  fullWidth
                  margin="normal"
                  multiline
                />

                <TextField
                  label="Prix de la formule"
                  name="prix"
                  type="number"
                  value={formuleEnEdition.prix}
                  onChange={handleChangeEdition}
                  required
                  fullWidth
                  margin="normal"
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "16px" }}
                >
                  Enregistrer
                </Button>
              </form>
            )}
          </div>
        </Modal>
      </div>
    </Container>
  );
};

export default FormulaireFormules;
