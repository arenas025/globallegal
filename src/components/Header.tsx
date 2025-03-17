import { useState } from "react";
import "./Header.css";
import { AnimatePresence, motion } from "motion/react";

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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              stiffness: 100,
              type: "spring",
            }}
            className="menu-overlay"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
