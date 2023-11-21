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
import image15 from "../image/SL4C.png";
import image17 from "../image/SL4G.png";
import image19 from "../image/SL4F.png";
import image20 from "../image/SL4B.png";
import image21 from "../image/SL4D.png";
import image22 from "../image/SL4E.png";
import image23 from "../image/SL4H.png";
import image24 from "../image/SL4J.png";
import image26 from "../image/SL4M.png";
import image27 from "../image/SL1A.png";
import image28 from "../image/SL1B.png";
import image29 from "../image/SL1C.png";

const menuItems = [
    {
      image: image1,
      id: 1,
      label: "Voir les salons de 6 places",
      submenu: [
        {
          picture: image1, 
          picture1:image2,
          picture2: image3,
          title: 'ANNE SYLVESTRE', 
          description: 'Notre espace de coworking est un environnement dynamique et collaboratif conçu pour favoriser la créativité et l`innovation parmi les professionnels partageant les mêmes idées.',
          price: '40.99 €', 
          name:"Anne sylvestre",
          image: image3,
          id: 11,
        },
        {
          picture:image4, 
          picture1:image5,
          picture2:image6,
          title: 'GEORGE DUVERGE', 
          description: 'Entrez dans notre espace de coworking, où le design moderne rencontre la fonctionnalité, offrant une atmosphère productive pour vous aider à atteindre vos objectifs professionnels.',
          price: '40.99 €',
          name:"George duverge",
          image: image2,
          id: 12,
        }, 
        {
          picture: image7, 
          picture1:image8,
          picture2: image9,
          title: 'ROBINSON', 
          description: 'Nous fournissons un espace de coworking flexible qui s`adresse aux particuliers, aux startups et aux équipes distantes, équipé de toutes les commodités nécessaires pour une expérience de travail transparente.',
          price: '40.99 €', 
          name:"Robinson",
          image: image4,
          id: 13,
          }, 
          {
            picture: image10 , 
              picture1: image11,
              picture2: image12,
              title: 'GABRIEL PERI', 
              description: 'Découvrez un espace de coworking axé sur la communauté où les opportunités de réseautage abondent, vous permettant de vous connecter et de collaborer avec un groupe diversifié de professionnels.',
              price: '40.99 €', 
            name:"Gabriel peri",
            image:image5,
            id: 14,
          }, 
          {
            picture: image10, 
            picture1:image12,
            picture2: image13,
            title: 'LEVALLOIS', 
            description: 'Notre espace de coworking est une oasis de productivité, offrant des postes de travail confortables, une connexion Internet haut débit et un mobilier ergonomique pour votre plus grand confort',
            price: '40.99 €', 
            name:"Levallois",
            image:image6,
            id: 15,
          }, 
      ],
    },
    {
      image:image12,
      id: 2,
      label: "Voir les salons de 4 places",
      submenu: [
        {
          picture: image14, 
          picture1:image15,
          picture2:image21,
          title: 'VICTORIA', 
          description: 'Découvrez les avantages d\'un espace de coworking haut de gamme qui allie travail et loisirs, avec des espaces de détente, des salons et même des installations de loisirs pour une expérience complète.',
          price: '30.99 €',
          name:"Victoria",
          image:image8,
          id: 21,
        },
        {
          picture: image22, 
          picture1:image19,
          picture2:image11,
          title: 'BLUM BELGRAN', 
          description: 'Rejoignez notre espace de coworking, stratégiquement situé au cœur de la ville, offrant un accès facile aux transports, aux restaurants et à d\'autres commodités essentielles.',
          price: '30.99 €', 
            name:"Blum belgram",
            image:image9,
            id: 22,
        },
        {
          picture: image23, 
          picture1:image21,
          picture2:image17,
          title: 'SAINT LAURENT', 
          description: 'En tant que membre de notre espace de coworking, vous avez accès à des événements, ateliers et séminaires exclusifs, enrichissant à la fois votre développement professionnel et personnel.',
          price: '30.99 €', 
            name:"Saint laurent",
            image:image10,
            id: 23,
        },
        {
          picture: image26, 
          picture1:image23,
          picture2:image4,
          title: 'ALTA GRACE', 
          description: 'Notre espace de coworking propose des plans d\'adhésion flexibles, vous permettant de choisir l\'option la plus adaptée à vos besoins, qu\'il s\'agisse d\'un bureau dédié ou d\'un arrangement de hot-desking',
          price: '30.99 €', 
            name:"Alta grace",
            image:image11,
            id: 24,
        },

        {
          picture:image14 , 
          picture1:image20,
          picture2:image24,
          title: 'VINCENNES', 
          description: 'Adoptez un sentiment de communauté et de collaboration dans notre espace de coworking, où l\'échange d\'idées et de connaissances prospère, créant un environnement favorable à la croissance de votre entreprise.',
          price: '30.99 €', 
          name:"Vincennes",
          image:image7,
          id: 25,
        },
      ],
    },
    {
        image:image13,
        id: 3,
        label: "Voir les espaces individuels",
        submenu: [
          {
            picture: image27, 
            picture1:image28,
            picture2:image29,
            title: 'INDIVIDUEL', 
            description: 'Découvrez un espace de coworking axé sur la communauté où les opportunités de réseautage abondent, vous permettant de vous connecter et de collaborer avec un groupe diversifié de professionnels.',
            price: '15.99 €', 
            name:"espace individuel",
            image:image14,
            id: 31,
            quantity: 120,
          },
        ],
      },
    
  ];
export default menuItems;
 