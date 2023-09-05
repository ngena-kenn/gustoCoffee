import React, { Component, useState  } from "react";
import './tarif.scss'
import { Link} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';

const A_propos = () =>  {
 

  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };
    
    

    return (
        <main>
            <section>
                <div className="titre" style={{padding:40}}>NOS FORFAITS D’EXCEPTIONS</div>
                    <div className="forme">
                      <div className="text_left ">Nos produits proviennent des meilleurs fournisseurs de toutes les régions françaises et leur traçabilité garantit un parfait contrôle de la qualité tout au long de leur parcours. A l’image du lieu, ils composent avec élégance et équilibre de délicats accords entre tradition et innovation. Le Café de l’Homme s’inscrit dans la tradition culinaire française en respectant chaque produit de manière à faire honneur à ce lieu magique et culturel.</div>
                      <div className="">
                        <div className="text2 text_right">FORFAIT DECOUVERTE</div>
                        <div className="text4 text_right">
                          <p>Nous sélectionnons des produits frais et de qualité pour vous
                            <br></br>proposer les meilleurs cafes ! Notre poisson est livré
                            <br></br>et préparé tous les matins dans chacune de nos cuisines.</p>

                          <p>ainsi nous vous proposont, 3 cafés du jours à la demande et des
                            <br></br>Viennoiseries ou douceurs sucrée à la demande</p>

                          <p>Chaque café est préparé à la minute, devant vos yeux. Et puis,
                            <br></br> c'est bien meilleur quand tout est fraîchement préparé !</p></div>
                          </div>
                        </div>
              </section>
              <section className=" section-2 ">
                <section className="container">
                <div className="forme hover-container ">
                  <div className="forfait1 original-content "></div>
                  <div className="align hover-content bg-color left-2">
                    <div className="text2 textdeco">FORFAIT DECOUVERTE</div>
                    <div className="text3 textdeco">Venez savourez les plaisir de Gusto Coffee</div>
                    {popupVisible && (<div className="popup">
          
          <Dialog  open={popupVisible} onClose={hidePopup} >
          <div className="text2 textdeco">
          le choix de forfait s'effectura après la reservation, <br></br> vous  les découvrirez directement sur site <br></br>et vous aurez l'occasion  de fair votre choix!</div>
            <button class="popup" onClick={hidePopup}>Fermer</button>
          </Dialog>
          
        </div>) }<div className="text4 textdeco">
                      <p>Nous sélectionnons des produits frais et de qualité pour vous
                        <br></br>proposer les meilleurs cafes ! Notre poisson est livré</p>

                      <p>ainsi nous vous proposont, 3 cafés du jours à la demande et des
                        <br></br>Viennoiseries ou douceurs sucrée à la demande</p>

                      <p>Chaque café est préparé à la minute, devant vos yeux. Et puis,
                        <br></br> c'est bien meilleur quand tout est fraîchement préparé !</p></div>
                       
                        <Link onClick={showPopup} class="link left" >Decouvrir</Link>
                  </div>
        </div>
        <div className="forme hover-container">
          <div className="forfait2 original-content left" ></div>
          <div className="align hover-content left bg-color">
            <div className="text2 textdeco">FORFAIT BARITAS</div>
            <div className="text3 textdeco">Chez Gusto Coffee, <br></br>nous vous proposont une multitudes de café  </div>
            <div className="text4 textdeco">
              <p>Nous nous engageons à être socialement et écologiquement
                <br></br>responsables !
              </p>

              <p>En effet, chaque cafés est préparé à la minute, devant vos yeux.
                <br></br>Et puis, c'est bien meilleur quand tout est fraîchement préparé.</p>

              <p>Nous mettons un point d'honneur à utiliser tous les produits
                <br></br>afin de ne rien gaspiller
                </p></div>
                <Link onClick={showPopup} class="link left" >Decouvrir</Link>
          </div>
          
        </div>
        </section>
      </section>
      <section className="section-3">
        <div className="container mgt">
          <div className="titre center ">
          La communication est fondamentale pour le devellopement, 
          donnez-nous vous avis sur nos produits et services.
            </div>
          <div className="formulair-send">
            <form action="https://formspree.io/f/myyaqdzk" method="POST">
              <label>
                Email
              </label>
              <input type="email" name="email"/>
              <label>
                Message
              </label>
              <textarea name="message"></textarea>
              
          <button class="nav-item" type="submit">ENVOYER</button>
        </form>
        </div>
</div>
      </section>
      </main>

    )
}
export default A_propos;