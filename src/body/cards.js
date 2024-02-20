import React, {useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Badge, CardActionArea, CardActions } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useCart } from 'react-use-cart';
import Button from '@mui/material/Button';
import {getAuth , onAuthStateChanged} from "firebase/auth";
import { app } from "../firebaseconfig";
import { useNavigate } from 'react-router-dom';




const Cards = ({items }) => {
  const [count, setCount] = useState(0);
  const { addItem } = useCart();
  const addToCart = (data) =>{
    addItem(data);  
}
const navigate = useNavigate()
const [authUser, setAuthUser] = useState(null);
const auth = getAuth(app);


 useEffect(() => {
   const listen = onAuthStateChanged(auth, (user) => {
     if (user) {
       setAuthUser(user);
     } else {
       setAuthUser(null);
     }
   });

   return () => {
     listen();
   };
 }, []);




  return (
    <>
    {items.submenu.map((submenuItem) => (
    <div className='grid'>
    <div className='grille'>
    <Card sx={{ maxWidth: 345 }} className={'grid-item'}>
      <CardActionArea>
      <CardContent style={{ height: '165px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {submenuItem.title} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {submenuItem.description}
          </Typography>
        </CardContent>
      <Carousel autoPlay interval={2000} infiniteLoop showIndicators={false}showStatus={false} showThumbs={false}>
        <CardMedia component="img" height="222" image={submenuItem.picture} />
        <CardMedia component="img" height="222" image={submenuItem.picture1}/>
        <CardMedia component="img"height="222" image={submenuItem.picture2} />
      </Carousel>
      </CardActionArea>
      <CardActions style={{ height: '40px', position: 'absolute', bottom: 15, width: '100%', justifyContent: 'center' }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
        <div className='price'>
          {submenuItem.price} /jour
        </div>
        {authUser ? (<Button 
           >
                  <Badge  onClick={()=>{addToCart(submenuItem)}} badgeContent={count} style={{ cursor: "pointer" }} color="success">
                   <LocalGroceryStoreOutlinedIcon />
                   </Badge>
        </Button>):(<Button  class="voir-plus-btn" onClick={() => {
                    navigate('/connect')
                  }} variant='outlined' color='success'  
                  >réserver</Button>)}
      
        
        </div>
      </CardActions>
    </Card>
    </div>
  </div>
   ))}
   
  </>
  )
}

export default Cards;
