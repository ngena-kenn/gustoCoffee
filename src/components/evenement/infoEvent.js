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
                        <div className="text4">Un tout nouveau café aux saveurs françaises, 
                        porté par la personnalité et la créativité 
                                    du Chef Arnaud Baptiste !</div>
                    </div>
                    <div className="aligne-center">
                        <div className=""><i class="fa-sharp fa-regular fa-bells"></i></div>
                        <div className="text3 mb-3">Campagne de Noël 2023🎄</div>
                        <div className="text4">Notre objectif ? Être le Père Noël 2.0 et
                        créer un mouvement d'amour à travers l'humour 🎅🏻</div>
            
                    </div>
                    <div className="aligne-center">
                        <div className=""></div>
                        <div className="text3 mb-3">Départ imminent vers Bali🌺</div>
                        <div className="text4">Gusto Coffee fait une escale à Bali le temps dun printemps, 
                        alors ready pour le décollage ? ✈️ </div>
            
                    </div>
                </div>
            </div>
        )
    }
}
export default infoEvent;