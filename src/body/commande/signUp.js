import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useRef} from "react";
import { app } from "../../firebaseconfig";
import {useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser';


const SignUp = () => {
 // const [email, setEmail] = useState("");
 // const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const formRef = useRef();
  const navigate = useNavigate();

  /*const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/
  
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  
  const sendEmail = (e) => {
    e.preventDefault()
    console.log('form ', formRef.current );
    emailjs.send('service_ggnvs77', 'template_pg0cnfe', formRef.current , 'q-876_psFwv_ORXjP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  
  const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[2].value.length || inputs.current[3].value.length) < 6) {
      setValidation("6 characters min")
      return;
    }
    else if(inputs.current[2].value !== inputs.current[3].value) {
      setValidation("Passwords do not match")
      return;
    }

    try {

      const cred = await signUp(
        inputs.current[1].value,
        inputs.current[2].value
      )
      sendEmail()
   
      // formRef.current.reset();
      setValidation("")
      navigate("/connect")

    } catch (err) {

      if(err.code === "auth/invalid-email") {
        setValidation("Email format invalid")
      }
      
      if(err.code === "auth/email-already-in-use") {
        setValidation("Email already used")
      }
 
    }

  }

  return (
    <div className="container">
      <form className="registration-form" ref={formRef} onSubmit={handleForm}>
        <h1>CREER TON COMPTE</h1>
        <input
          placeholder="Entrez votre nom"
          ref={addInputs}
          name="user_name"
          required
          type="text"
          className="form-control" 
          id="name" 
          label="Nom" variant="outlined"
        ></input>
        <input
          placeholder="Entrez votre email"
          ref={addInputs}
          name="email"
          required
          type="email"
          className="form-control"
        ></input>
        <input
          type="password"
          placeholder="Mot de passe"
          ref={addInputs}
          name="pwd"
          required
          className="form-control"
        ></input>
        <input
          type="password"
          placeholder="verifiez votre mot de passe"
          ref={addInputs}
          name="pwd"
          required
          className="form-control"
        ></input>
        <p className="text-danger mt-1">{validation}</p>
        <button  value="Send" type="submit">inscription</button>
      </form>
    </div>
  );
};

export default SignUp;