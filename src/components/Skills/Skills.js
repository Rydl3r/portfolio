import { skills } from '../../data';
import './Skills.css';

const skillCategories = [
  { key: 'core', title: 'Core Technologies', icon: '⚛️' },
  { key: 'stateManagement', title: 'State Management', icon: '🔄' },
  { key: 'styling', title: 'UI & Styling', icon: '🎨' },
  { key: 'testing', title: 'Testing', icon: '🧪' },
  { key: 'tools', title: 'Tools & DevOps', icon: '🛠️' },
  { key: 'bestPractices', title: 'Best Practices', icon: '✨' },
];

const levelLabels = {
  expert: { label: 'Expert', className: 'skills__level--expert' },
  proficient: { label: 'Proficient', className: 'skills__level--proficient' },
  familiar: { label: 'Familiar', className: 'skills__level--familiar' },
};

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills & Expertise</h2>
      <p className="section__subtitle">
        Technologies and practices I work with daily
      </p>

      <div className="skills__legend">
        <span className="skills__legend-item skills__legend-item--expert">Expert</span>
        <span className="skills__legend-item skills__legend-item--proficient">Proficient</span>
        <span className="skills__legend-item skills__legend-item--familiar">Familiar</span>
      </div>

      <div className="skills__container">
        {skillCategories.map((category, catIdx) => (
          skills[category.key] && (
            <div
              key={category.key}
              className="skills__category glass-card"
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              <h3 className="skills__category-title">
                <span className="skills__category-icon">{category.icon}</span>
                {category.title}
              </h3>
              <ul className="skills__list">
                {skills[category.key].map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className={`skills__item ${levelLabels[skill.level]?.className || ''}`}
                    style={{ animationDelay: `${(catIdx * 0.1) + (skillIdx * 0.03)}s` }}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Skills;
