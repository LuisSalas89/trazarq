import React, {useState} from 'react'
import logo from './Logo.png';
import "../styles/header.css"


function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <nav className="navbar">
          <img src={logo} alt="logo" className='logo' />
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#acerca">Acerca de</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </>
    );
  }
export default Header