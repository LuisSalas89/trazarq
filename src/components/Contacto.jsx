import React from 'react';
import "../styles/contacto.css";
import {Whats} from './Iconos'; // Assuming your SVG is in 'Iconos' folder
import {Mail} from './Iconos'; 

function Contacto() {
    function enviarWhatsApp() {
        window.open("https://wa.me/524611891968", "_blank");
    }

    function enviarContacto() {
        console.log("nada")
    }

    return (
        <>
        <div className="contacto-container">
            <button onClick={enviarWhatsApp} className="contacto-button">
                <Whats fill="currentColor" /> {/* Optional: Set fill color */}
                <span>Whatsapp</span>
            </button>
            <button onClick={enviarContacto} className="contacto-button2">
    <Mail fill="currentColor" /> {/* Optional: Set fill color */}
    <span>Contacto</span>
</button>

        </div>

</>
    );
}

export default Contacto;