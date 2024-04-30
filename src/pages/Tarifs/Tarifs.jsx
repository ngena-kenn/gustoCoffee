import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import imageHome from "../../assets/header/header_tarifs.png";
import CardInfo from "../../components/CardInfo/CardInfo";
import Forfaits from "../../components/Forfaits/Forfaits";
import { Helmet } from "react-helmet";
import imageCard from "../../assets/cardinfo/discuss_img_about.png";

function Tarifs() {
  return (
    <div className="tarifs">
      <Helmet>
        <title>Tarifs - Gusto Coffee</title>
        <meta
          name="description"
          content="Découvrez les tarifs compétitifs de Gusto Coffee. Profitez de nos formules flexibles pour déguster nos cafés de qualité à des prix abordables. Découvrez nos forfaits pour une expérience café complète."
        />
      </Helmet>
      <HeroSection
        title="Tarifs"
        description="Découvrez nos tarifs compétitifs chez Gusto Coffee. Nous vous proposons des formules flexibles pour savourer notre sélection de cafés de qualité à des prix abordables."
        imageSrc={imageHome}
      />
      <HeroSection
        title="Forfaits"
        description="Découvrez nos forfaits chez Gusto Coffee : 
        le forfait découverte pour une expérience café complète et le forfait barista pour les amateurs de café exquis."
      />
      <Forfaits />
      <CardInfo
        title="Réserver une salle ?"
        description="Chez Gusto Coffee, nous comprenons l'importance de travailler côte à côte avec vos collaborateurs ou partenaires. C'est pourquoi, dans nos espaces de travail individuels, nous vous offrons la possibilité de vous asseoir à côté de vos collègues, amis ou contacts professionnels."
        imageSrc={imageCard}
        linkText="Réserver"
        linkUrl="/reserver"
      />
    </div>
  );
}

export default Tarifs;
