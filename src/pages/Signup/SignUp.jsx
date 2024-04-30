import React, { useState } from "react";
import { BsPersonLock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/authActions";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ["ROLE_USER"],
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setIsPasswordConfirmed(event.target.checked);
    setIsSubmitDisabled(!event.target.checked);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // Regex pour la validation du mot de passe

    if (
      isChecked &&
      formValues.password === formValues.confirmPassword &&
      passwordRegex.test(formValues.password)
    ) {
      try {
        dispatch(
          registerUser(
            formValues.firstName,
            formValues.lastName,
            formValues.email,
            formValues.password,
            formValues.role
          )
        );
        navigate("/connexion");
      } catch (error) {}
    } else {
      toast.error(
        "Erreur d'inscription. Veuillez vérifier vos informations. Le mot de passe doit contenir au moins une majuscule, un chiffre et avoir au moins 8 caractères.",
        { position: toast.POSITION.TOP_CENTER }
      );
    }
  };

  const handleNavigation = () => {
    navigate("/connexion");
  };

  return (
    <div className="sign_up">
      <Helmet>
        <title>Inscription - Gusto Coffee</title>
        <meta
          name="description"
          content="Inscrivez-vous chez Gusto Coffee pour accéder à nos services. Remplissez le formulaire avec votre prénom, nom, email et mot de passe. Acceptez les termes et conditions pour créer votre compte."
        />
      </Helmet>
      <form className="form_signup" onSubmit={handleFormSubmit}>
        <h2>Inscription</h2>
        <div className="sign_up_form">
          <label htmlFor="firstName" className="sign_up_form-label">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            className="sign_up_form-input"
          />
        </div>

        <div className="sign_up_form">
          <label htmlFor="lastName" className="sign_up_form-label">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            className="sign_up_form-input"
          />
        </div>

        <div className="sign_up_form">
          <label htmlFor="email" className="sign_up_form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="sign_up_form-input"
          />
        </div>

        <div className="sign_up_form">
          <label htmlFor="password" className="sign_up_form-label">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className="sign_up_form-input"
          />
        </div>
        <div className="sign_up_form">
          <label htmlFor="confirmPassword" className="sign_up_form-label">
            Confirmer votre mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            className="sign_up_form-input"
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label> J'accepte les termes et conditions</label>
        </div>

        <button
          type="submit"
          className="sign_up_form-submit"
          disabled={isSubmitDisabled}
        >
          S'inscrire
        </button>
      </form>
      <div className="sign_up_account">
        Déjà un compte ?
        <button onClick={handleNavigation} className="sign_up_account-btn">
          <BsPersonLock
            style={{ width: "30px", height: "auto", color: "#836349" }}
          />
        </button>
      </div>
    </div>
  );
};

export default SignUp;
