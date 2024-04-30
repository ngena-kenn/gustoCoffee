import React from "react";
import { Link } from "react-router-dom";

const CardInfo = ({ title, description, imageSrc, linkText, linkUrl }) => {
  return (
    <div className="card-info">
      <div className="card-info-container">
        <div className="card-info-container_description">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to={linkUrl}>{linkText}</Link>
        </div>
        <img className="card-info-container_image" src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default CardInfo;
