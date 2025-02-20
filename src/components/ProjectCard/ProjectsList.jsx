
import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';

const projects = [
  {
    title: 'The Burger House website',
    description: 'Burger shop website with menu, promotions, ordering and easy navigation..',
    imageUrl: '../../images/prj1.JPG',
    link: 'https://glebatv.github.io/Burger-site/'
  },
  {
    title: 'University',
    description: 'University site with information about the faculties, timetable, news and contacts.',
    imageUrl: '../../images/prj2.JPG',
    link: 'https://glebatv.github.io/University/'
  },
  {
    title: 'Music Player',
    description: 'Music player site with playlists, track management and settings.',
    imageUrl: '../../images/prj3.JPG',
    link: 'https://glebatv.github.io/Music-Player/'
  },
];

const ProjectList = () => {
  return (
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
 
export default ProjectList;