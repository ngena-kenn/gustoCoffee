import React from "react";
import '../css/acceuil.scss';
import { Link} from 'react-router-dom';

const  Franchise = ({title}) => {
    return (
      <div style={{paddingTop: 50}}>
        <div className="titre">{title} </div>
        <div className="forme">
          <div className=" ">
            <p class="text_produit">Nos salons de <br/> 6 places </p>
            <div className="produit1 aligne"></div>
          <Link to='/espaces' class="link " >Decouvrir</Link>
          </div>
          <div className="">
          <div class="text_produit">Nos salons de <br/> 4 places </div>
          <div className="produit2 aligne"></div>
          <Link to='/espaces' class="link" >Decouvrir</Link>
          </div>
          <div className="">
          <div class="text_produit">Nos places <br/> individuelles </div>
          <div className="produit3 aligne"></div>
          <Link to='/espaces' class="link" >Decouvrir</Link>
          </div>
        </div>
      </div>
    )
  }
export default Franchise;