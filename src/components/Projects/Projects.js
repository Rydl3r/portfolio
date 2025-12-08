import ProjectContainer from '../ProjectContainer/ProjectContainer';
import SectionHeader from '../SectionHeader/SectionHeader';
import { projects } from '../../data';
import styles from './Projects.module.css';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section">
      <SectionHeader
        title="Projects"
        subtitle="A selection of projects I've built and contributed to"
      />

      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <ProjectContainer key={project.name} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
