import { Link } from "react-router-dom";

const HeroSection = ({
  title,
  description,
  buttonLabel1,
  buttonLabel2,
  buttonLink1,
  buttonLink2,
  imageSrc,
}) => {
  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {buttonLabel1 && buttonLink1 && (
        <div className="hero-section__button">
          <Link to={buttonLink1}>{buttonLabel1}</Link>
          {buttonLabel2 && buttonLink2 && (
            <Link to={buttonLink2}>{buttonLabel2}</Link>
          )}
        </div>
      )}
      {imageSrc && (
        <div className="hero-section__image">
          <img src={imageSrc} alt="header" />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
