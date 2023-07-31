import React  from "react";
import '../css/page.scss';
import '../css/containerPage.scss'
import MenuItem from './Espace';
import menuItems from '../utils/data';



const SideBar=()=>{

 
  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );

};
export default SideBar;

