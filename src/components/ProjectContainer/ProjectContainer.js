import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project, featured, index }) => (
  <article
    className={`project glass-card ${featured ? 'project--featured' : ''}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="project__content">
      <div className="project__header">
        <h3 className="project__name">{project.name}</h3>
        {featured && <span className="project__badge">Featured</span>}
      </div>

      <p className="project__description">{project.description}</p>

      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item, idx) => (
            <li key={idx} className="pill">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>

    <div className="project__links">
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="btn btn--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label="live preview"
          className="btn btn--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LaunchIcon />
        </a>
      )}
    </div>

    <div className="project__glow"></div>
  </article>
);

export default ProjectContainer;
