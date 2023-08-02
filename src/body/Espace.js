import React,{useState} from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';



const Espace = ({ item }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
 

  const handleClick = () => {
    setShowSubmenu(!showSubmenu);
  };
 

  return (
    <>
    <li
      onClick={handleClick}
      
    >
    <CardMedia
      component="img"
      height="200"
      image={item.image}
      />
      <div className="name_space">
      <a href={item.link}>{item.label}</a>
      </div>
      {showSubmenu && (
        <ul>
          {item.submenu.map((submenuItem) => (
            <li key={submenuItem.id}>
              <CardActionArea href={submenuItem.path}>
              <CardMedia component="img" height="170" width="50" image={submenuItem.image} />
              </CardActionArea>
              <div className="name_space size_name"><a href={submenuItem.path}>{submenuItem.name}</a></div>
            </li>
          ))}
        </ul>
      )}
    </li>
    </>
    
      
  );
};

export default Espace;