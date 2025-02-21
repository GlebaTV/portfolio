import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';
import prj1 from '/public/assets/images/prj1.jpg';
import prj2 from '/public/assets/images/prj2.jpg';
import prj3 from '/public/assets/images/prj3.jpg';
const projects = [
  {
    title: 'The Burger House website',
    description: 'Burger shop website with menu, promotions, ordering and easy navigation..',
    imageUrl: prj1,
    link: 'https://glebatv.github.io/Burger-site/'
  },
  {
    title: 'University',
    description: 'University site with information about the faculties, timetable, news and contacts.',
    imageUrl: prj2,
    link: 'https://glebatv.github.io/University/'
  },
  {
    title: 'Music Player',
    description: 'Music player site with playlists, track management and settings.',
    imageUrl: prj3,
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