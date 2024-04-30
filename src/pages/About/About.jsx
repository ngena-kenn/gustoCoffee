import React , { useRef, useState }from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import imageHome from "../../assets/header/header_quisommesnous.png";
import CardInfo from "../../components/CardInfo/CardInfo";
import ListProduits from "../../components/ListProduits/ListProduits";
import { Helmet } from "react-helmet";
import imageCard from "../../assets/cardinfo/discuss_img_about.png";
import emailjs from '@emailjs/browser';
import Dialog from '@mui/material/Dialog';

function About() {

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
    <div className="about">
      <Helmet>
        <title>Qui sommes nous ? - Gusto Coffee</title>
        <meta
          name="description"
          content="Découvrez qui nous sommes chez Gusto Coffee. Notre équipe dynamique comprend non seulement des baristas talentueux, mais aussi des développeurs passionnés travaillant en coulisses pour assurer une expérience fluide sur notre site internet et nos services en ligne ainsi que sur notre application mobile."
        />
      </Helmet>
      <HeroSection
        title="Qui sommes nous ?"
        description="Découvrez qui nous sommes chez Gusto Coffee. Notre équipe dynamique comprend non seulement des baristas talentueux, mais aussi des développeurs passionnés travaillant en coulisses pour assurer une expérience fluide sur notre site internet et nos services en ligne ainsi que sur notre application mobile."
        imageSrc={imageHome}
      />
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

      <CardInfo
        title="Travaillons ensemble !"
        description="Rejoignez l'équipe Gusto Coffee et faites partie d'une aventure passionnante dans le monde du café et du coworking. Nous recherchons des talents passionnés pour contribuer à notre succès. Découvrez nos opportunités de carrière et apportez votre expertise à notre équipe dynamique."
        imageSrc={imageCard}
        linkText="Nous contacter"
        linkUrl="/contact"
      />
    </div>
  );
}

export default About;


