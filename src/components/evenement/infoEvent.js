import React, { Component } from "react";
import { Link } from 'react-router-dom';


class infoEvent extends Component{
    render(){
        return (
            <div>
            <div className="titre" >Actualités</div>
                <div className="forme">
                    
                    <div className="aligne-center">
                        <div className="list-inline-item logo-reseau-socio"><i className="fa-duotone fa-mug-saucer"></i></div>
                        <div className="text3 mb-3">Le café by Arnaud Baptiste 🧑🏻‍🍳</div>
                        <div className="text4">Situé dans le 5ème arrondissement de Paris, au 11 rue de l’école Polytechnique, à côté du Panthéon, proche des bibliothèques universitaires (Sorbonne, Cujas, Sainte-Barbe) et publique (BSG Sainte-Geneviève), Level Coworking vous accueille dans son nouvel espace de coworking végétalisé, idéal pour travailler comme pour se détendre.</div>
                    </div>
                    <div className="aligne-center">
                        <div className=""><i class="fa-sharp fa-regular fa-bells"></i></div>
                        <div className="text3 mb-3">Campagne de Noël 2023🎄</div>
                        <div className="text4">L’Espace a été pensé pour permettre la tranquilité de la réflexion ainsi que la bonne circulation des personnes. En assise normale, haute, banquette, ou canapé chill, vous pourrez y changer en fonction de vos envies !
Vous disposez de tout le nécessaire pour travailler et être productif : wifi sécurisé, prises électriques, imprimante, scanner.</div>
            
                    </div>
                    <div className="aligne-center">
                        <div className=""></div>
                        <div className="text3 mb-3">Départ imminent vers Bali🌺</div>
                        <div className="text4">Gusto Coffee fait une escale à Bali le temps dun printemps, 
                        alors ready pour le décollage ? Gusto Coffee Coworking vous accueille dans son espace de coworking végétalisé, idéal pour travailler comme pour se détendre. Vous disposez de tout le nécessaire pour travailler et être productif : wifi sécurisé, prises électriques, imprimante, scanner.</div>
            
                    </div>
                </div>
            </div>
        )
    }
}
export default infoEvent;