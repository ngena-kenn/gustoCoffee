import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../css/footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
faFacebook,
faInstagram,
faTiktok,
faTwitter,
faYoutube,
} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  

  return (
    <section id="footer" class=" d-none d-md-block">
        <div class="container mrg ">
            <div class="row">
                <div class="espace col mt-5">
                    <div class="mb-4">
                        <img src={Logo} className="logo-footer" alt="La Sacem"/>
                    </div>
                    <p class="address-footer ">
                        10 rue des lilas 94200 Créteil<br />
                        Sarl au capital de 10000€<br/> 
                
                        01 47 15 47 15
                    </p>
                    <br/>
                    <ul class="networks list-inline">
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://www.facebook.com/profile.php?id=61551042325030"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://twitter.com/gustocoffeef2i?t=ClooKH1EEZNa6GN0w8QgUg&s=09"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://www.tiktok.com/@gustocoffee_tm?_t=8fSVlNyfmAT&_r=1"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://instagram.com/gustocoffee?igshid=MzRlODBiNWFlZA=="><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://www.tiktok.com/@gustocoffee_tm?_t=8fSVlNyfmAT&_r=1"><FontAwesomeIcon icon={faTiktok} /></a></li>
                    </ul>
                </div>

                <div class="col mt-5">
                    <div class="title-footer">Autres informations</div>
                    <ul class="list-unstyled mt-4 subtitle-footer">
                        <li><Link to="/contact">Aide et Contact</Link></li>
                        <li><Link to="/qui-sommes-nous">Ressources et documents</Link></li>
                        <li><Link to="/mentions-legales">Adhérer à Gusto Coffee</Link></li>
                        <li><Link to="/concept">Gusto Coffee en région</Link></li>
                        <li><a>Ressources et presse</a></li>
                        <li><Link to='/conditions-generales-utilisation'>Mentions légales et CGU</Link></li>
                        <li><Link to="/politique-de-confidentialite">Politique de confidentialité et cookies</Link></li>
                    </ul>
                </div>

                <div class="pr col mt-5">
                    <div class="title-footer">Autres sites</div>
                    <ul class="list-unstyled mt-4 subtitle-footer">
                        <li><a>Clients Utilisateurs</a></li>
                        <li><Link to="/concept">GUSTO</Link></li>
                        <li><Link to="/mentions-legales">Aide aux Projets</Link></li>
                        <li><Link to="/reserver">achat en ligne</Link></li>
                        <li><a target="_blank">Emplois &amp; carrières</a></li>
                        <li><a target="_blank" href="http://www.monprojetmusique.fr/">Mon projet paternair</a></li>
                        <li><a target="_blank" href="http://electronicmusicfactory.com/">Electronic Factory</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Footer;

