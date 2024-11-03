// src/components/Carrusel.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Carrusel = () => {
  useEffect(() => {
    $('.your-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
  }, []);

  return (
    <div className="your-slider">
      <div>
        <img src="https://rickandmortyapi.com/api/character/avatar/46.jpeg" alt="Imagen 1" />
        <h3>Slide 1</h3>
        <p>Contenido del primer slide.</p>
      </div>
      <div>
        <img src="https://rickandmortyapi.com/api/character/avatar/46.jpeg" alt="Imagen 2" />
        <h3>Slide 2</h3>
        <p>Contenido del segundo slide.</p>
      </div>
      <div>
        <img src="https://rickandmortyapi.com/api/character/avatar/46.jpeg" alt="Imagen 3" />
        <h3>Slide 3</h3>
        <p>Contenido del tercer slide.</p>
      </div>
    </div>
  );
};

export default Carrusel;
