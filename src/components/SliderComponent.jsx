import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "../styles/sliders.css"

const SliderComponent = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    };

    return (
        <div className="your-slider">
            <Slider {...settings}>
                <div>
                    <img src="./Screenshot_20241103_152851.png" alt="Imagen 1" />
                    <h3>Servicios de Diseño</h3>
                    <p>Convierte tus sueños en realidad.</p>
                </div>
                <div>
                <a href="index2" target="_blank" rel="noopener noreferrer">
  <img src="./0547066882.jpg" alt="Imagen 2" />
</a>
<a href="/index2" target="_blank" rel="noopener noreferrer">
  <h3>Trámite de licencias</h3>
</a>
<a href="/index2" target="_blank" rel="noopener noreferrer">
  <p>A través de este servicio le ofrecemos la seguridad de una construcción bien planeada.</p>
</a>
                </div>
                <div>
                    <img src="./Reenderizado1.png" alt="Imagen 3" />
                    <h3>Diseño Arquitectonico</h3>
                    <p>Planos de Anteproyecto | Renderizado y Modelado 3D</p>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;