import EmailIcon from '@mui/icons-material/Email';
import { contact, about } from '../../data';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={styles.container}>
        <div className={`${styles.content} glass-card`}>
          <h2 className={styles.title}>
            {contact.headline || "Let's Connect"}
          </h2>
          
          <p className={styles.description}>
            {contact.description}
          </p>

          <div className={styles.actions}>
            <a
              href={`mailto:${contact.email}`}
              className={`btn btn--primary ${styles.emailBtn}`}
            >
              <EmailIcon />
              Say Hello
            </a>
          </div>

          <SocialLinks social={about.social} className={styles.social} />

          <p className={styles.emailText}>
            Or email me directly at{' '}
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
          </p>
        </div>

        {/* Decorative elements */}
        <div className={`${styles.decoration} ${styles.decoration1}`}></div>
        <div className={`${styles.decoration} ${styles.decoration2}`}></div>
      </div>
    </section>
  );
};

export default Contact;
