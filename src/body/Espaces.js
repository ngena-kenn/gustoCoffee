import React ,{useState}  from "react";
import '../css/page.scss';
import '../css/containerPage.scss'
import MenuItem from './Espace';
import menuItems from '../utils/data';
import Card from '@mui/material/Card';
import CardCover from '@mui/joy/CardCover';
import Video from '../image/Video.mp4'
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
    {menuItems.map((item) => (
      <ul onClick={handleChange} >
          <MenuItem key={item.id} item={item} />
      </ul>
       ))}
      </div>
      {showSubmenu && (
    <div className="" style={{  position: 'relative' }} >
    <Card component="li" sx={{ minWidth: 500, position: 'relative', height: 500, left:50, top:50 }} >
          <CardCover>
            <video
              style={{ height: 500}}
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src={Video}
                type="video/mp4"
              />
            
            </video>
            
          </CardCover>      
        </Card>
        <section>
        <div className="infoVid"> 
              <h2 className="title_Info">GUSTO COFFEE Coworking</h2>
              <p>Trouvez votre bureau parmi nos offres et bénéficiez d'un accompagnement personnalisé. Découvrez tous les bureaux clés en main en téléchargant notre application pour mobile. </p>
              <Link to='/a_propos' class="link" style={{ marginLeft: 30, }} >Decouvrir</Link>
        </div>
        </section>
    </div> )}
    </div>
    </section>
      </>
    

      
  );

};
export default SideBar;

