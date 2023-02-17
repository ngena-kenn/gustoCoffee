import React from 'react'
import Card from '@mui/material/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import video from '../../image/video.mp4'
import image from '../../image/NOS-VALEURS-1.jpeg'
import './acceuil.scss'
import Franchise from '../../body/Franchise';
import Carousel from '../carousel/carousel';

const Acceuil = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ width: '40%', margin: 'auto', textAlign: 'center', paddingTop: 120 }}>
        <p style={{ fontSize: 33 }}>DARK KITCHEN</p>
        <p style={{ fontSize: 23 }}>POKE BIO</p>
      </div>
      <div>
        <Card component="li" sx={{ minWidth: 300, position: 'relative', height: 600, }}>
          <CardCover>
            <video
              style={{ height: 600 }}
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
        </Card>
      </div>
      <Franchise title={""} />
      <Carousel />
    </div>
  )
}
export default Acceuil