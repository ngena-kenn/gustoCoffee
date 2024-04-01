import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../../firebaseconfig";
import SignOut from "./signOut";
import "../../css/page.scss";
import {useNavigate} from "react-router-dom";




const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();
  

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/my-account")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  
    <div  className="container">
      <form className="registration-form" onSubmit={signIn}>
        <h1>CONNECTEZ VOUS </h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default SignIn;