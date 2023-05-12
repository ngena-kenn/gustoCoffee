import React from 'react'
import Card from '@mui/material/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import video from '../../image/videoAcc.mp4'
import './acceuil.scss'
import Franchise from '../../body/Franchise';
import Carousel from '../carousel/Sliders';
import Tarifs from '../../body/Tarifs';
import InfoEvent from '../evenement/infoEvent';

const Acceuil = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div>
        <Card component="li" sx={{ minWidth: 300, position: 'relative', height: 500, }}>
          <CardCover>
            <video
              style={{ height: 500, paddingTop: 30}}
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src={video}
                type="video/mp4"
              />
            
            </video>
            
          </CardCover>

          <CardContent>
             
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Video
            </Typography>
          </CardContent>
          <div className="overlayVid"> 
              <h2 className="overlay_title">GUSTO COFFEE Coworking</h2>
              <p>Trouvez votre bureau parmi nos offres et bénéficiez d'un accompagnement personnalisé. Découvrez tous les bureaux clés en main et trouvez le bureau idéal pour vos équipes. </p>
        </div>
        </Card>
        
      </div>
      <Franchise title={"NOS PRODUITS"} />
      <Tarifs/>
      <div style={{paddingTop:80 }}></div>
      <Carousel />
      <InfoEvent/>
    </div>

  )
}
export default Acceuil