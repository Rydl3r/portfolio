import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { projects } from '../../data';
import './Projects.css';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">
        A selection of projects I've built and contributed to
      </p>

      <div className="projects__grid">
        {projects.map((project, idx) => (
          <ProjectContainer key={project.name} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
