import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from '../../data';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const closeNav = () => setShowNavList(false);

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.list} ${showNavList ? styles.listOpen : ''}`}>
        {navItems.map((item) => {
          if (!item.condition()) return null;
          return (
            <li key={item.id} className={styles.listItem}>
              <a
                href={`#${item.id}`}
                onClick={closeNav}
                className={`${styles.link} ${item.isCta ? styles.linkCta : ''}`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={toggleNavList}
        className={`btn btn--icon ${styles.hamburger}`}
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
