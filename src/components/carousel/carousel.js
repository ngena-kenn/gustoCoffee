import React from 'react';

import slide2 from '../../image/slider2.png'
import slide3 from '../../image/slider3.png'

const Carousel = () => {
  return (
    <div style={{padding: '10px 30px'}}>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div style={{width: '100%', height: '400px'}} class="carousel-item active">
            <img src={slide3} style={{objectFit: 'contain'}} class="d-block w-100" alt="slide1" />
          </div>
          <div style={{width: '100%', height: '400px'}} class="carousel-item">
            <img src={slide2} style={{objectFit: 'contain'}} class="d-block w-100" alt="slide2" />
          </div>
          <div style={{width: '100%', height: '400px'}} class="carousel-item">
            <img src={slide3} style={{objectFit: 'contain'}} class="d-block w-100" alt="slide3" />
          </div>
          <div style={{width: '100%', height: '400px'}} class="carousel-item">
            <img src={slide2} style={{objectFit: 'contain'}} class="d-block w-100" alt="slide3" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel