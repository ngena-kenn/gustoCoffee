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
    e.preventDefault();
    console.log('form ', formRef.current);
    emailjs.sendForm('service_f0np3b7', 'template_dse3izh', formRef.current
      , '6Jj0FamXApTqAa_Ck')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  
  const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 characters min")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match")
      return;
    }

    try {

      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      // formRef.current.reset();
      setValidation("")
      navigate("/home")

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
    <div className="sign-in-container">
      <form ref={formRef} onSubmit={handleForm}>
        <h1>Create Account</h1>
        <input
          placeholder="Enter your Name"
          ref={addInputs}
          name="user_name"
          required
          type="text"
          className="form-control" 
          id="name" 
          label="Nom" variant="outlined"
        ></input>
        <input
          placeholder="Enter your email"
          ref={addInputs}
          name="email"
          required
          type="email"
          className="form-control"
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          ref={addInputs}
          name="pwd"
          required
          className="form-control"
        ></input>
        <input
          type="password"
          placeholder="Repeat your password"
          ref={addInputs}
          name="pwd"
          required
          className="form-control"
        ></input>
        <p className="text-danger mt-1">{validation}</p>
        <button type="submit" onSubmit={sendEmail} >Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;