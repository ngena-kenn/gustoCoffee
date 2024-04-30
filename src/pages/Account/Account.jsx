import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../store/profile/profileActions";
import { Avatar, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logoutAndClearStore } from "../../store/auth/authActions";
import { selectIsAdmin } from "../../store/auth/authReducer";

const AccountContainer = styled("div")({
  padding: "16px",
  width: "100%",
  boxSizing: "border-box",
  "@media (min-width: 768px)": {
    width: "50%",
    margin: "0 auto",
  },
});

const AccountProfile = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  marginBottom: "16px",
});

const AvatarImage = styled(Avatar)({
  width: "200px",
  height: "200px",
});

const AccountForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const SubmitButton = styled(Button)({
  alignSelf: "flex-start",
});

const Account = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.userProfile);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userProfile) {
      setFirstName(userProfile.prenom || "");
      setLastName(userProfile.nom || "");
      setEmail(userProfile.email || "");
      setPhone(userProfile.telephone || "");
      setAddress(userProfile.adresse || "");
      setCity(userProfile.ville || "");
      setCodePostal(userProfile.codePostal || "");
    }
  }, [userProfile]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [codePostal, setCodePostal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProfile = {
      nom: lastName,
      prenom: firstName,
      telephone: phone,
      email: email,
      adresse: address,
      ville: city,
      codePostal: codePostal,
    };
    const userId = localStorage.getItem("id");

    axios
      .put(
        `${process.env.REACT_APP_API}/api/user/update_user_profil/${userId}`,
        updatedProfile,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setIsProfileUpdated(true);
          toast.success("Profil mis à jour");
        } else {
          toast.error("Erreur lors de la mise à jour du profil");
        }
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleDeleteAccount = () => {
    const userId = localStorage.getItem("id");

    axios
      .delete(
        `${process.env.REACT_APP_API}/api/user/delete_user_account/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(logoutAndClearStore());
          navigate("/");
        } else {
          toast.error("Erreur lors de la suppression du compte");
        }
      })
      .catch((error) => {
        console.error("Error deleting account:", error);
      });
  };
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <AccountContainer>
      <h2>Compte</h2>
      {isAdmin && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/admin")}
        >
          Accéder à l'interface admin
        </Button>
      )}
      <AccountProfile>
        <AvatarImage alt={`${firstName}`} src="ras" />
        <div>
          <h5>{`${firstName} ${lastName}`}</h5>
          <p>{email}</p>
        </div>
      </AccountProfile>
      <AccountForm onSubmit={handleSubmit}>
        <TextField
          label="Prénom"
          variant="outlined"
          fullWidth
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          label="Nom"
          variant="outlined"
          fullWidth
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Téléphone"
          variant="outlined"
          fullWidth
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          label="Adresse"
          variant="outlined"
          fullWidth
          id="address"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <TextField
          label="Ville"
          variant="outlined"
          fullWidth
          id="city"
          name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <TextField
          label="Code Postal"
          variant="outlined"
          fullWidth
          id="codePostal"
          name="codePostal"
          value={codePostal}
          onChange={(event) => setCodePostal(event.target.value)}
        />
        <SubmitButton variant="contained" color="primary" type="submit">
          Sauvegarder
        </SubmitButton>
        <Button variant="contained" color="error" onClick={handleDeleteAccount}>
          Supprimer mon compte
        </Button>
      </AccountForm>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </AccountContainer>
  );
};

export default Account;
