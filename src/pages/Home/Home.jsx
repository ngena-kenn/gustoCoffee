import HeroSection from "../../components/HeroSection/HeroSection";
import imageHome from "../../assets/header/header_home.png";
import Card from '@mui/material/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import video from '../../assets/videoAcc.mp4'
import './acceuil.scss'
import Carousel from '../body/Sliders';
import Tarifs from '../body/Tarifs';
import InfoEvent from '../body/infoEvent';

function Home() {
  return (
    <div id="Home">
      <div style={{ position: 'relative' }}>
      <div>
        <Card component="li" sx={{ minWidth: 300, position: 'relative', height: 500, }}>
          <CardCover>
            <video
              style={{height: 500}}
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
        
          </CardContent>
          <div className="overlayVid"> 
              <h2 className="overlay_title">GUSTO COFFEE Coworking</h2>
              <p>Trouvez votre bureau parmi nos offres et bénéficiez d'un accompagnement personnalisé. Découvrez tous les bureaux clés en main et trouvez le bureau idéal pour vos équipes. </p>
        </div>
        </Card>
      </div>
      <HeroSection
        title="NOS PRODUITS"
        description="Bienvenue chez Gusto Coffee, votre coffee-shop coworking à Paris. Profitez de nos espaces de travail collaboratifs et savourez des cafés de qualité dans une ambiance inspirante. Rejoignez-nous pour une expérience caféinée unique près de la gare du Nord !"
        buttonLabel1="salles privées"
        buttonLabel2="places individuels"
        buttonLink1="/reserver"
        buttonLink2="/reserver"
        imageSrc={imageHome}
      />
      <Tarifs/>
      <div style={{paddingTop:80 }}></div>
      <Carousel />
      <InfoEvent/>
    </div>
    </div>
  );
}

export default Home;



