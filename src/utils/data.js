import image1 from "../image/sl6a.png";
import image2 from "../image/sl6b.png";
import image3 from "../image/sl6c.png";
import image4 from "../image/sl6d.png";
import image5 from "../image/sl6e.png";
import image6 from "../image/sl6F.png";
import image7 from "../image/SL4A.png";
import image8 from "../image/SL4C.png";
import image9 from "../image/SL4E.png";
import image10 from "../image/SL4G.png";
import image11 from "../image/SL4M.png";
import image12 from "../image/SL4F.png";
import image13 from "../image/SL1D.jpg";
import image14 from "../image/SL1B.png";

const menuItems = [
    {
      image: image1,
      id: 1,
      label: "Salon de 6 places",
      submenu: [
        {
          path:"/espaces/grand_salon/GS1",
          name:"Anne sylvestre",
          image: image3,
          id: 11,
        },
        {
          path:"/espaces/grand_salon/GS2",
          name:"George duverge",
          image: image2,
          id: 12,
        }, 
        {
            path:"/espaces/grand_salon/GS3",
            name:"Robinson",
            image: image4,
            id: 13,
          }, 
          {
            path:"/espaces/grand_salon/GS4",
            name:"Gabriel peri",
            image:image5,
            id: 14,
          }, 
          {
            path:"/espaces/grand_salon/GS5",
            name:"Levallois",
            image:image6,
            id: 15,
          }, 
      ],
    },
    {
      image:image12,
      id: 2,
      label: "Salon de 4 places",
      submenu: [
        {
          path:"/espaces/petit_salon/PS1",
          name:"Victoria",
          image:image8,
          id: 21,
        },
        {
            path:"/espaces/petit_salon/PS2",
            name:"Blum belgram",
            image:image9,
            id: 22,
        },
        {
            path:"/espaces/petit_salon/PS3",
            name:"Saint laurent",
            image:image10,
            id: 23,
        },
        {
            path:"/espaces/petit_salon/PS4",
            name:"Alta grace",
            image:image11,
            id: 24,
        },

        {
          path:"/espaces/grand_salon/GS5",
          name:"Vincennes",
          image:image7,
          id: 25,
        },
      ],
    },
    {
        image:image13,
        id: 3,
        label: "espace individuel",
        submenu: [
          {
            path:"/espaces/petit_salon/EI",
            name:"espace individuel",
            image:image14,
            id: 31,
          },
        ],
      },
    
  ];
export default menuItems;
 