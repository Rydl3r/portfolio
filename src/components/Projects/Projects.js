import { projects } from '../../data';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project, idx) => (
          <ProjectContainer key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
