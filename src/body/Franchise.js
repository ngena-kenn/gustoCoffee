import React , { useRef } from "react";
import '../css/acceuil.scss';
import { Link} from 'react-router-dom';
import { color } from "@mui/system";
import emailjs from '@emailjs/browser';


const  Franchise = ({title}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form ', form.current)
    emailjs.sendForm('service_ggnvs77', 'template_pg0cnfe', form.current , 'q-876_psFwv_ORXjP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

    return (
      <div class="cadrenews" >
       <center> <h1 style={{color: "white"}}>LA COMBINAISON PARFAITE :<br></br>DECOUVREZ NOS OFFRES AVEC 10 % DE REMISE</h1>
       <p style={{color: "white"}}>ABONNEZ-VOUS À NOTRE NEWSLETTER</p>
       </center>
       <form className="registration-form" ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email"/>
      <div>
        <button type="submit" value="Send" class="caseform2" id="" >Envoyer</button>
        </div>
    </form>
      </div>
    )
  }

export default Franchise;
