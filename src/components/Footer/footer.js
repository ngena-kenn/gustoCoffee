
import  '../../css/footer.scss'
import logo from '../../image/logo.png'
import React, {Component} from 'react'

const Footer = () => {

  return (
    <section id="footer" class=" d-none d-md-block">
        <div class="container mrg ">
            <div class="row">
                <div class="espace col mt-5">
                    <div class="mb-4">
                        <img src={logo} className="logo-footer" alt="La Sacem"/>
                    </div>
                    <p class="address-footer ">
                        10 rue des lilas 94200 Créteil<br />
                        Sarl au capital de 10000€<br/> 
                
                        01 47 15 47 15
                    </p>
                    <br/>
                    <ul class="networks list-inline">
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://www.facebook.com/pages/Sacem/208663865818206?fref=ts"><i class="fab fa-facebook"></i></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://twitter.com/sacem"><i class="fab fa-twitter"></i></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://www.youtube.com/user/sacem"><i class="fab fa-youtube"></i></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="http://instagram.com/sacem"><i class="fab fa-instagram"></i></a></li>
                        <li class="list-inline-item logo-reseau-socio"><a target="_blank" href="https://www.tiktok.com/@sacem"><i class="fab fa-tiktok "></i></a></li>
                    </ul>
                </div>

                <div class="col mt-5">
                    <div class="title-footer">Autres informations</div>
                    <ul class="list-unstyled mt-4 subtitle-footer">
                        <li><a>Aide et Contact</a></li>
                        <li><a >Ressources et documents</a></li>
                        <li><a>Adhérer à Gusto Coffee</a></li>
                        <li><a>Gusto Coffee en région</a></li>
                        <li><a>Ressources et presse</a></li>
                        <li><a>Mentions légales et CGU</a></li>
                        <li><a>Politique de confidentialité et cookies</a></li>
                    </ul>
                </div>

                <div class="pr col mt-5">
                    <div class="title-footer">Autres sites</div>
                    <ul class="list-unstyled mt-4 subtitle-footer">
                        <li><a>Clients Utilisateurs</a></li>
                        <li><a>GUSTO</a></li>
                        <li><a>Aide aux Projets</a></li>
                        <li><a>achat en ligne</a></li>
                        <li><a target="_blank">Emplois &amp; carrières</a></li>
                        <li><a target="_blank" href="http://www.monprojetmusique.fr/">Mon projet paternair</a></li>
                        <li><a target="_blank" href="http://electronicmusicfactory.com/">Electronic Factory</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer;
//expose(Footer);