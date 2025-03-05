import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="hero-logo">
        <img width="200" height="40" src="/logo.svg" alt="global legal logo" />
        <img width="20" height="20" src="/burger-menu.svg" alt="menu" />
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
    </header>
  );
};

export default Header;
