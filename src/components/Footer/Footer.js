import { footer } from '../../data';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.text}>
        Designed & Built by{' '}
        <a href={footer.github} target="_blank" rel="noreferrer" className={styles.link}>
          {footer.author}
        </a>
      </p>
      <p className={styles.copyright}>© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
