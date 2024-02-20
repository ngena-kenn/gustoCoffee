import React ,{useState}  from "react";
import '../css/page.scss';
import '../css/containerPage.scss'
import MenuItem from './Espace';
import menuItems from '../utils/data';
import Card from '@mui/material/Card';
import CardCover from '@mui/joy/CardCover';
import '../css/containerPage.scss'
import { Link} from 'react-router-dom';




const SideBar=({})=>{
  
  const [showSubmenu, setShowSubmenu] = useState(true);

  const handleChange = () => {
    setShowSubmenu(!showSubmenu);
  };
  
  return (
   <>
   <section className="col-20  body_espace">
    <div className="container">
    <div className="sidebar">
    <div className="titretypes" style={{}}>DECOUVREZ NOS TYPES DE SALON PLUS BAS</div>
    {menuItems.map((item) => (
      <ul onClick={handleChange} >
          <MenuItem key={item.id} item={item} />
      </ul>
       ))}
      </div>
      {showSubmenu && (
    <div style={{  position: 'relative' }} >
    <Card className="new-info" component="li" sx={{  position: 'relative',  left:100, top:50 }} >
    <div class="soushaut">
        <div class ="encadrement" >
        <div class="card mb-3"  >
        <div class="card-body" >
    <h1 class="card-title">L’Espace a été pensé pour permettre la tranquilité de la réflexion ainsi que la bonne circulation des personnes. En assise normale, haute, banquette, ou canapé chill,</h1>
    <p class="card-text">vous pourrez y changer en fonction de vos envies et Vous disposez de tout le nécessaire pour travailler et être productif : wifi sécurisé, prises électriques, imprimante, scanner..</p>
  </div>            
          
        </div>
        </div>
        </div>     
        </Card>
        <section>
        <div className="infoVid"> 
              <h2 className="title_Info">GUSTO COFFEE Coworking</h2>
              <p>Trouvez votre bureau parmi nos offres et bénéficiez d'un accompagnement personnalisé. Découvrez tous les bureaux clés en main en téléchargant notre application pour mobile. </p>
              <Link to='/a_propos' class="link" style={{ marginLeft: 10 }}>Découvrir</Link>
        </div>
        </section>
    </div> )}
    </div>
    </section>
      </>      
  );

};
export default SideBar;

