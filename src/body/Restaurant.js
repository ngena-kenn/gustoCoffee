import React  from "react";
import '../css/page.scss';
import Card from '@mui/material/Card';
import CardCover from '@mui/joy/CardCover';
import Video from '../image/Video.mp4'
import '../components/containerPage/containerPage.scss'
import MenuItem from './Espace';
import menuItems from '../utils/data';
import { Link} from 'react-router-dom';



const SideBar=()=>{

 
  return (
    <div className="container">
    <div className="sidebar" >
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
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
              <p>Trouvez votre bureau parmi nos offres et bénéficiez d'un accompagnement personnalisé. Découvrez tous les bureaux clés en main et trouvez le bureau idéal pour vos équipes. </p>
              <Link to='/a_propos' class="link" style={{ marginLeft: 30, }} >Decouvrir</Link>
        </div>
        
        </section>
        
    </div>
    </div>
  );

};
export default SideBar;
