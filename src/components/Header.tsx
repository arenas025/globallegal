import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="hero-logo">
        <img width="200" height="40" src="/logo.svg" alt="global legal logo" />
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          width="20"
          height="20"
          src="/burger-menu.svg"
          alt="menu"
        />
      </div>
      <ul>
        <li>
          <a href="#service-offering">Nuestros servicios</a>
        </li>
        <li>
          <a href="#team">Conoce a nuestro equipo</a>
        </li>
        <li>
          <a href="#contact">Contáctanos</a>
        </li>
      </ul>
      {isMenuOpen && (
        <div className="menu-overlay">
          <div className="menu-overlay-header">
            <img src="/logo.svg" alt="global legal logo" />
            <p onClick={() => setIsMenuOpen(false)}>x</p>
          </div>
          <ul>
            <li>
              <a href="#service-offering">Nuestros servicios</a>
            </li>
            <li>
              <a href="#team">Conoce a nuestro equipo</a>
            </li>
            <li>
              <a href="#contact">Contáctanos</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
