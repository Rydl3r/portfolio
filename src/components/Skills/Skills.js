import { skills, skillCategories, levelLabels } from '../../data';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <SectionHeader
        title="Skills & Expertise"
        subtitle="Technologies and practices I work with daily"
      />

      <div className={styles.legend}>
        <span className={`${styles.legendItem} ${styles.legendExpert}`}>Expert</span>
        <span className={`${styles.legendItem} ${styles.legendProficient}`}>Proficient</span>
        <span className={`${styles.legendItem} ${styles.legendFamiliar}`}>Familiar</span>
      </div>

      <div className={styles.container}>
        {skillCategories.map((category, catIdx) => {
          if (!skills[category.key]) return null;
          return (
            <div
              key={category.key}
              className={`${styles.category} glass-card`}
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.title}
              </h3>
              <ul className={styles.list}>
                {skills[category.key].map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className={`${styles.item} ${styles[levelLabels[skill.level]?.className] || ''}`}
                    style={{ animationDelay: `${catIdx * 0.1 + skillIdx * 0.03}s` }}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
