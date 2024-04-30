import React from "react";
import { Link } from "react-router-dom";

function SectionColumns({
  title,
  description,
  imageSrc,
  reverseLayout,
  buttonLabel,
  buttonStyle,
  buttonLink,
}) {
  return (
    <div className={`section-columns ${reverseLayout ? "reverse" : ""}`}>
      <div className="section-columns_content">
        <h2>{title}</h2>
        <p>{description}</p>
        {buttonLink && (
          <Link to={buttonLink} className={`custom-button ${buttonStyle}`}>
            {buttonLabel}
          </Link>
        )}
      </div>
      <div className="section-columns_image">
        <img src={imageSrc} alt="salles de réunion" />
      </div>
    </div>
  );
}

export default SectionColumns;
