import React from "react";
import '../css/page.css';

const  Franchise = ({title}) => {
    return (
      <div style={{paddingTop: 90}}>
        <div className="titre">{title} </div>
        <div className="forme">
          <div className="valeur2 aligne"></div>
          <div className="aligne">
            <div className="text1">Fresh food everyday</div>
            <div className="text2">LORSQUE BIO RIME AVEC QUALITÉ</div>
            <div className="text3" style={{padding: 15}}>
              <p>Nous sélectionnons des produits frais et de qualité pour vous
                <br></br>proposer les meilleurs pokés ! Notre poisson est livré
                <br></br>et préparé tous les matins dans chacune de nos cuisines.</p>
              <p>De plus, nos légumes et nos fruits tropicaux sont choisis
                <br></br>avec soin afin de ravir les papilles de nos Pokawaïens.</p>
              <p>Chaque poké est préparé à la minute, devant vos yeux. Et puis,
                <br></br> c'est bien meilleur quand tout est fraîchement préparé !</p></div>
          </div>
        </div>
      </div>
    )
  }

export default Franchise;