import React , { useRef, useState  } from "react";
import '../css/acceuil.scss';
import { Link} from 'react-router-dom';
import { color } from "@mui/system";
import emailjs from '@emailjs/browser';
import Dialog from '@mui/material/Dialog';


const  Franchise = ({title}) => {

  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };
    

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form ', form.current)
    emailjs.sendForm('service_ggnvs77', 'template_pg0cnfe', form.current , 'q-876_psFwv_ORXjP')
      .then((result) => {
        console.log(result.text);
        setPopupVisible(true);
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
        {popupVisible && (<div className="">
          
          <Dialog  open={popupVisible} onClose={hidePopup} >
          <div className="text2 textdeco">
          Vous venez de vous inscrir a nos NEWSLETTER,<br></br> vous recevrez les mails de nos activités et de nos status</div>
            <button class="popup" onClick={hidePopup}>Fermer</button>
          </Dialog>
          
        </div>) }
    </form>
      </div>
    )
  }

export default Franchise;
