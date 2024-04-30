
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/slider1.png';
import slide2 from '../../assets/slider2.jpg';
import slide3 from '../../assets/slider3.jpg';
import '../Home/acceuil.scss';

function Sliders() {
  return (
    <Carousel 
    autoPlay 
    interval={1000} 
    infiniteLoop 
    showIndicators={false}
    showStatus={false}
    showThumbs={false}
    >
      <div className="overlay">
        <img src={slide2} alt=""/>
      </div>
      <div className="overlay">
        <img src={slide3} alt=""/>
      </div>
      <div className="overlay">
        <img src={slide1} alt=""/>
      </div>
    </Carousel>
  )
}

export default Sliders;