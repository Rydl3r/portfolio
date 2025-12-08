import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import { about } from '../../data';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './About.module.css';

const About = () => {
  const { name, role, tagline, description, highlights, social, profileImage } = about;

  return (
    <section className={styles.hero} id="about">
      {/* Decorative elements */}
      <div className={`${styles.decoration} ${styles.decoration1}`}></div>
      <div className={`${styles.decoration} ${styles.decoration2}`}></div>
      <div className={`${styles.decoration} ${styles.decoration3}`}></div>

      <div className={styles.heroContainer}>
        {/* Profile Image Section */}
        <div className={`${styles.profileSection} animate-fade-in-up`}>
          <div className={styles.profileWrapper}>
            <div className={styles.profileImageContainer}>
              {profileImage ? (
                <img src={profileImage} alt={name} className={styles.profileImage} />
              ) : (
                <div className={styles.profilePlaceholder}>
                  <CodeIcon className={styles.placeholderIcon} />
                  <span className={styles.initials}>
                    {name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.profileGlow}></div>
            <div className={styles.profileRing}></div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.content}>
          <div className={`${styles.intro} animate-fade-in-up`}>
            <span className={styles.greeting}>Hi there, I'm</span>
          </div>

          <h1 className={`${styles.name} animate-fade-in-up stagger-1`}>
            {name}
            <span className={styles.dot}>.</span>
          </h1>

          <h2 className={`${styles.role} animate-fade-in-up stagger-2`}>
            <span className="gradient-text">{role}</span>
          </h2>

          <p className={`${styles.tagline} animate-fade-in-up stagger-3`}>{tagline} 🚀</p>

          <p className={`${styles.description} animate-fade-in-up stagger-4`}>{description}</p>

          {highlights && (
            <ul className={`${styles.highlights} animate-fade-in-up stagger-5`}>
              {highlights.map((highlight, idx) => (
                <li key={idx} className={styles.highlight}>
                  <span className={styles.highlightIcon}>→</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <div className={`${styles.actions} animate-fade-in-up stagger-6`}>
            <a href="#projects" className="btn btn--primary">
              View My Work
              <ArrowForwardIcon fontSize="small" />
            </a>
            <a href="#contact" className="btn btn--outline">
              Get In Touch
            </a>
          </div>

          <SocialLinks
            social={social}
            className={`${styles.social} animate-fade-in-up stagger-6`}
          />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default About;
