import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  return (
    <div>
      <Link to="/admin">
        <IconButton color="primary" aria-label="Retour à l'administration">
          <ArrowBackIcon />
          Retour à l'administration
        </IconButton>
      </Link>
    </div>
  );
}

export default BackButton;
