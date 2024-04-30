import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ListeSalons from "../../components/ListeSalons/ListeSalons";
import CardInfo from "../../components/CardInfo/CardInfo";
import { Helmet } from "react-helmet";
import imageCard from "../../assets/cardinfo/discuss_img_about.png";

function Reserver() {
  const salonPrincipal = [
    {
      image: "salles/Amazonie.png",
      nomSalonPrincipal: "Salle Amazonie",
    },
  ];

  const salonsPrivate = [
    {
      image: "salles/Bayonne.png",
      nomSalonPrivate: "Les salons privés",
    },
  ];

  return (
    <div className="reserver body_espace">
      <Helmet>
        <title>Réserver des salles de réunion - Gusto Coffee</title>
        <meta
          className="titre_resa"
          name="description"
          content="Découvrez nos salles de réunion privées et notre salon principal chez Gusto Coffee. Bénéficiez d'un espace exclusif et confortable pour vos réunions et travaux en petit comité. Profitez de la tranquillité et de l'intimité de nos salles pour des échanges productifs et confidentiels."
        />
      </Helmet>
      <HeroSection
        title="SALLES DE REUNION"
        description="Découvrez nos salles de réunion privées et notre salon principal chez Gusto Coffee. Bénéficiez d'un espace exclusif et confortable pour vos réunions et travaux en petit comité. Profitez de la tranquillité et de l'intimité de nos salles pour des échanges productifs et confidentiels."
      />
      <div className="reserver-salons">
        <div className="reserver-salon-principal">
          <h2>Le salon principal</h2>
          <ListeSalons salons={salonPrincipal} />
        </div>
        <div className="reserver-salon-prive">
          <h2>Les salons privés</h2>
          <ListeSalons salons={salonsPrivate} />
        </div>
      </div>
      <CardInfo
        title="Avez-vous des question ?"
        description="Chez Gusto Coffee, nous comprenons l'importance de travailler côte à côte avec vos collaborateurs ou partenaires. C'est pourquoi, dans nos espaces de travail individuels, nous vous offrons la possibilité de vous asseoir à côté de vos collègues, amis ou contacts professionnels."
        imageSrc={imageCard}
        linkText="Contactez Nous"
        linkUrl="/contact"
      />
      
    </div>
  );
}

export default Reserver;
