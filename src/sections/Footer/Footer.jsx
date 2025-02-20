import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaInstagram, FaTelegram, FaGithub, FaVk  } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link  to="/contact"href="#contact" className={styles.link}>
          Связаться
        </Link>
        <div className={styles.icons}>
          <a href="https://www.instagram.com/_glebpavlov?igsh=cXVtcDNrOWZhdDRr&utm_source=qr" className={styles.icon}>
          <FaInstagram  style={{ color: 'white'}}/>
          </a>
          <a href="https://t.me/sicritq" className={styles.icon}>
            <FaTelegram style={{ color: 'white'}}/>
          </a>
          <a href="https://github.com/GlebaTV" className={styles.icon}>
            <FaGithub style={{ color: 'white'}}/>
          </a>
          <a href="https://vk.com/glebpavlov" className={styles.icon}>
            <FaVk style={{ color: 'white'}}/>
          </a>
        </div>
        <div className={styles.year}>© 2025 Gleb Pavlov</div>
      </div>
    </footer>
  );
};

export default Footer;