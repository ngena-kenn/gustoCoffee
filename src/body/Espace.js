import React,{useState} from 'react';
import CardMedia from '@mui/material/CardMedia';


const Espace = ({ item }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleClick = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <>
    <CardMedia
      component="img"
      height="200"
      image={item.image}
      />
    <li
      onClick={handleClick}
      
    >
      <a href={item.link}>{item.label}</a>
      {showSubmenu && (
        <ul>
          {item.submenu.map((submenuItem) => (
            <li key={submenuItem.id}>
              <CardMedia component="img" height="170" width="50" image={submenuItem.image} />
              <a href={submenuItem.path}>{submenuItem.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
    </>
    
      
  );
};

export default Espace;