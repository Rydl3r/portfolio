import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import { experience } from '../../data';
import SectionHeader from '../SectionHeader/SectionHeader';
import TechPillList from '../TechPillList/TechPillList';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <SectionHeader
        title="Experience"
        subtitle="My journey from freelance hustling to enterprise-level development"
      />

      <div className={styles.timeline}>
        {experience.map((job, idx) => (
          <div
            key={idx}
            className={`${styles.item} ${idx % 2 === 0 ? styles.itemLeft : styles.itemRight}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className={`${styles.card} glass-card`}>
              {/* Company Logo */}
              <div className={styles.logoWrapper}>
                {job.logo ? (
                  <img src={job.logo} alt={job.company} className={styles.logo} />
                ) : (
                  <div className={styles.logoPlaceholder}>
                    <BusinessIcon className={styles.logoIcon} />
                  </div>
                )}
              </div>

              <div className={styles.header}>
                <div className={styles.companyInfo}>
                  <h3 className={styles.company}>{job.company}</h3>
                  <span className={styles.role}>{job.role}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>
                    <WorkIcon fontSize="small" />
                    {job.period}
                  </span>
                  <span className={styles.location}>
                    <LocationOnIcon fontSize="small" />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className={styles.description}>{job.description}</p>

              {job.achievements && (
                <ul className={styles.achievements}>
                  {job.achievements.map((achievement, achieveIdx) => (
                    <li key={achieveIdx} className={styles.achievement}>
                      <span className={styles.achievementIcon}>✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {job.technologies && (
                <TechPillList items={job.technologies} className={styles.tech} />
              )}
            </div>

            <div className={styles.marker}>
              <div className={styles.markerDot}></div>
            </div>
          </div>
        ))}

        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default Experience;
