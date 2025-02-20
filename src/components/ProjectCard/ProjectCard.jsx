/* eslint-disable react/prop-types */
import styles from './ProjectCard.module.css';
const ProjectCard = ({ title, description, imageUrl, link }) => {
    return (
      
      
      <div className={styles.projectCard} style={{display: 'flex', overflowX: 'hidden'}}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>Посмотреть проекты</a>
      </div>
      
    );
};

export default ProjectCard;