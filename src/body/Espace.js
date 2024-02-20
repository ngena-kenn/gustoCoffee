import React,{useState} from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Card from "./cards"



const Espace = ({ item }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
 

  const handleClick = () => {
    setShowSubmenu(!showSubmenu);
    setButtonText((prevText) => (prevText === 'Voir plus' ? 'Cacher' : 'Voir plus'));
  };
  const [buttonText, setButtonText] = useState('Voir plus');

  
 
 

  return (
    <>
    <li
      onClick={handleClick}
      
    >
    <div className="container">
    <div className="position" >
    <CardMedia
      component="img"
      height="200"
      width="200 !important"
      image={item.image}
      />
      <div className="ajustement">
      <div className="name_space">
      <a href={item.link}>{item.label}</a> 
      </div>
      <div>
      <button class="voir-plus-btn">{buttonText}</button>
      </div>
      </div></div>
      {showSubmenu && (
        <div >
           <div className="conteneur">
            <Card 
              items={item}  
            />
          </div>
        </div>
      )}
    </div>
    </li>
    </>
    
      
  );
};

export default Espace;