import { header } from '../../data';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

const Header = () => {
  const { title } = header;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#about" className={styles.logo}>
          {title}
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
