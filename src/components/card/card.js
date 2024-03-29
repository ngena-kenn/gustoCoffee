import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Badge, CardActionArea, CardActions } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const CustomizeCard = ({id, image, image1, image2, title, description, price, commande,setProducts, handleAddProduct }) => {
  const [count, setcount] = useState(0)

  return (
    <Card sx={{ maxWidth: 345 }} className={'grid-item'}>
      <CardActionArea>
      <CardContent style={{ height: '165px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      <Carousel autoPlay interval={2000} infiniteLoop showIndicators={false}showStatus={false} showThumbs={false}>
        <CardMedia component="img" height="222" image={image} />
        <CardMedia component="img" height="222" image={image1}/>
        <CardMedia component="img"height="222" image={image2} />
      </Carousel>
      </CardActionArea>
      <CardActions style={{ height: '40px', position: 'absolute', bottom: 15, width: '100%', justifyContent: 'center' }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
        <div className='price'>
          {price}
        </div>
        {commande &&  <div onClick={() => {
            setProducts((prev) => ([...prev, {product: title, price: price}]))
            setcount((prev) => prev+1)
            handleAddProduct()
          }}>
            <Badge badgeContent={count} style={{ cursor: "pointer" }} color="success">
            <LocalGroceryStoreOutlinedIcon />

            </Badge>
          </div>}
        </div>
      </CardActions>
    </Card>
  )
}

export default CustomizeCard
