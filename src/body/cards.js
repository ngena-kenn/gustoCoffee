import React, { useState } from 'react'
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


const Cards = ({items}) => {
  const [count, setCount] = useState(0);
  const { addItem } = useCart();
  const addToCart = (data) =>{
    addItem(data);  
}


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
          {submenuItem.price}
        </div>
        <Button 
           >
                  <Badge  onClick={()=>{addToCart(submenuItem)}} badgeContent={count} style={{ cursor: "pointer" }} color="success">
                   <LocalGroceryStoreOutlinedIcon />
                   </Badge>
        </Button>
      
        {/* {commande &&  <div onClick={() => {
            setProducts((prev) => ([...prev, {product: submenuItem.title, price: submenuItem.price}]))
            setcount((prev) => prev+1)
            handleAddProduct()
          }}>

            <Badge badgeContent={count} style={{ cursor: "pointer" }} color="success">
            <LocalGroceryStoreOutlinedIcon />

            </Badge>
          </div>} */}
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
