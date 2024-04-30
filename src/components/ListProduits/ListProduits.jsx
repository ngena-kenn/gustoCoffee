import React, { useState } from "react";

function ListProduits() {
  const [produits] = useState([
    {
      name: "Café Arabica",
      description:
        "Découvrez l'excellence du Café Arabica, une formule délicieuse pour votre expérience de coworking. Plongez dans les arômes riches et l'atmosphère chaleureuse de Gusto Coffee. Notre Café Arabica est le compagnon parfait pour vos réunions productives près de la gare du Nord.",
      img: "/produits/cafe-arabica.webp",
    },
    {
      name: "Café Gusto",
      description:
        "Le Café Gusto, une invitation à l'univers du coworking café. Laissez-vous emporter par la passion du Café Gusto, une fusion caféinée qui stimulera votre créativité. Profitez de notre espace de travail collaboratif unique et de nos cafés de qualité.",
      img: "/produits/cafe-gusto.webp",
    },
    {
      name: "Café Miko",
      description:
        "Plongez dans l'univers du Café Miko, une expérience caféinée et collaborative. Notre Café Miko vous offre une pause bien méritée lors de vos sessions de coworking. Découvrez l'ambiance chaleureuse de Gusto Coffee, où le travail rime avec plaisir.",
      img: "/produits/cafe-miko.webp",
    },
  ]);

  const [produits2] = useState([
    {
      name: "Croissant",
      description:
        "Notre croissant, la touche gourmande de votre session de coworking. Profitez de la légèreté et de la douceur de notre croissant tout en travaillant dans notre espace convivial. Une formule délicieuse pour une journée productive chez Gusto Coffee, près de la gare du Nord.",
      img: "/produits/croissant.jpeg",
    },
    {
      name: "Éclair au café",
      description:
        "L'éclair au café, une expérience caféinée pour votre coworking. Savourez la magie de notre éclair au café, parfait pour une pause gourmande lors de vos réunions. Plongez dans l'atmosphère chaleureuse de Gusto Coffee, votre espace de travail inspirant.",
      img: "/produits/eclair-cafe.jpg",
    },
    {
      name: "Éclair au chocolat",
      description:
        "L'éclair au chocolat, la gourmandise qui accompagne votre coworking. Succombez à la douceur de notre éclair au chocolat tout en travaillant en collaboration. Une expérience gourmande incontournable à Gusto Coffee, où le coworking devient un plaisir.",
      img: "/produits/eclair-chocolat.jpeg",
    },
  ]);

  return (
    <div className="list_produits">
      <h2 className="list_produits-title">Nos produits</h2>
      <div className="list_produits-card">
        {produits.map((produits, index) => (
          <div key={index} className="list_produits-members">
            <img
              className="list_produits-card-img"
              src={produits.img}
              alt={produits.name}
            />
            <h5 className="liste_produits-card-name">{produits.name}</h5>
            <p className="liste_produits-card-description">
              {produits.description}
            </p>
          </div>
        ))}
      </div>
      <div className="list_produits-card">
        {produits2.map((produits, index) => (
          <div key={index} className="list_produits-members">
            <img
              className="list_produits-card-img"
              src={produits.img}
              alt={produits.name}
            />
            <h5 className="liste_produits-card-name">{produits.name}</h5>
            <p className="liste_produits-card-description">
              {produits.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduits;
