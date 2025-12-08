import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { experience } from '../../data';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <h2 className="section__title">Experience</h2>
      <p className="section__subtitle">
        My journey from freelance hustling to enterprise-level development
      </p>

      <div className="experience__timeline">
        {experience.map((job, idx) => (
          <div
            key={idx}
            className={`experience__item ${idx % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="experience__card glass-card">
              <div className="experience__header">
                <div className="experience__company-info">
                  <h3 className="experience__company">{job.company}</h3>
                  <span className="experience__role">{job.role}</span>
                </div>
                <div className="experience__meta">
                  <span className="experience__period">
                    <WorkIcon fontSize="small" />
                    {job.period}
                  </span>
                  <span className="experience__location">
                    <LocationOnIcon fontSize="small" />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="experience__description">{job.description}</p>

              {job.achievements && (
                <ul className="experience__achievements">
                  {job.achievements.map((achievement, achieveIdx) => (
                    <li key={achieveIdx} className="experience__achievement">
                      <span className="experience__achievement-icon">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {job.technologies && (
                <div className="experience__tech">
                  {job.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="experience__marker">
              <div className="experience__marker-dot"></div>
            </div>
          </div>
        ))}

        <div className="experience__line"></div>
      </div>
    </section>
  );
};

export default Experience;
