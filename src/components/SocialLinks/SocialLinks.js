import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';

const SocialLinks = ({ social, className }) => (
  <div className={`social-links ${className || ''}`}>
    {social?.github && (
      <a
        href={social.github}
        target="_blank"
        rel="noreferrer"
        className="btn btn--icon"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </a>
    )}
    {social?.linkedin && (
      <a
        href={social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="btn btn--icon"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
    )}
  </div>
);

SocialLinks.propTypes = {
  social: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default SocialLinks;
