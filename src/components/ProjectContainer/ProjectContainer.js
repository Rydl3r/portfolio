import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import WebIcon from '@mui/icons-material/Web';
import PropTypes from 'prop-types';
import TechPillList from '../TechPillList/TechPillList';
import styles from './ProjectContainer.module.css';

const ProjectContainer = ({ project, featured, index }) => (
  <article
    className={`${styles.project} glass-card ${featured ? styles.featured : ''}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Project Thumbnail */}
    <div className={styles.thumbnail}>
      {project.image ? (
        <img src={project.image} alt={project.name} className={styles.thumbnailImage} />
      ) : (
        <div className={styles.thumbnailPlaceholder}>
          <WebIcon className={styles.thumbnailIcon} />
          <div className={styles.thumbnailOverlay}></div>
        </div>
      )}
      {featured && <span className={styles.featuredBadge}>Featured</span>}
    </div>

    <div className={styles.content}>
      <div className={styles.header}>
        <h3 className={styles.name}>{project.name}</h3>
      </div>

      <p className={styles.description}>{project.description}</p>

      {project.stack && <TechPillList items={project.stack} className={styles.stack} />}
    </div>

    <div className={styles.links}>
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

    <div className={styles.glow}></div>
  </article>
);

ProjectContainer.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  featured: PropTypes.bool,
  index: PropTypes.number,
};

export default ProjectContainer;
