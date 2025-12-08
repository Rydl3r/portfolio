import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { about } from '../../data';
import './About.css';

const About = () => {
  const { name, role, tagline, description, highlights, social } = about;

  return (
    <section className="hero" id="about">
      {/* Decorative elements */}
      <div className="hero__decoration hero__decoration--1"></div>
      <div className="hero__decoration hero__decoration--2"></div>
      <div className="hero__decoration hero__decoration--3"></div>

      <div className="hero__content">
        <div className="hero__intro animate-fade-in-up">
          <span className="hero__greeting">Hi there, I'm</span>
        </div>

        <h1 className="hero__name animate-fade-in-up stagger-1">
          {name}
          <span className="hero__dot">.</span>
        </h1>

        <h2 className="hero__role animate-fade-in-up stagger-2">
          <span className="gradient-text">{role}</span>
        </h2>

        <p className="hero__tagline animate-fade-in-up stagger-3">
          {tagline} 🚀
        </p>

        <p className="hero__description animate-fade-in-up stagger-4">
          {description}
        </p>

        {highlights && (
          <ul className="hero__highlights animate-fade-in-up stagger-5">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="hero__highlight">
                <span className="hero__highlight-icon">→</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="hero__actions animate-fade-in-up stagger-6">
          <a href="#projects" className="btn btn--primary">
            View My Work
            <ArrowForwardIcon fontSize="small" />
          </a>
          <a href="#contact" className="btn btn--outline">
            Get In Touch
          </a>
        </div>

        <div className="hero__social animate-fade-in-up stagger-6">
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
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
};

export default About;
