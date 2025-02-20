import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <Link to="/portfolio" className={styles.navText}>
        PAVLOV GLEB
      </Link>

      {/* Бургер-меню для мобильных устройств */}
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>

      {/* Навигационные ссылки */}
      <div className={`${styles.navLink} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;