import React from "react";
import '../css/acceuil.scss';
import { Link} from 'react-router-dom';
import { color } from "@mui/system";

const  Franchise = ({title}) => {
    return (
      <div class="cadrenews" >
       <center> <h1 style={{color: "white"}}>LA COMBINAISON PARFAITE :<br></br>À LA MODE ET AVEC 10 % DE REMISE</h1>
       <p style={{color: "white"}}>ABONNEZ-VOUS À NOTRE NEWSLETTER</p>
       </center>
       <form>
       <div class="mb-2">
  <center>
  <input type="email" class="caseform" id="" placeholder="Email*"></input>
  
  <div>
  <button class="caseform2" id="" >Envoyer</button>
  </div>
  
  </center>
</div>
       
       </form>
      </div>
    )
  }

export default Franchise;