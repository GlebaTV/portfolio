import styles from './Hero.module.css';
import profilePage from '../../images/img1.jpg'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className={styles.hero}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Привет, меня зовут Глеб.</h1>
        <p>Начинающий Front-end разработчик из Москвы, увлеченный созданием доступных и удобных сайтов.</p>
        <Link to="/about" className={styles.button} aria-label="Contact me">Подробнее</Link>
      </div>
      <div className={styles.imageContainer}>
        <img src= {profilePage} alt="Gleb Pavlov" className={styles.image} />
      </div>
    </div>
  </div>
  );
};

export default Hero;