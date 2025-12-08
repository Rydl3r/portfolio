import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { projects, skills, contact, experience } from '../../data';
import './Navbar.css';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const closeNav = () => setShowNavList(false);

  return (
    <nav className="nav">
      <ul className={`nav__list ${showNavList ? 'nav__list--open' : ''}`}>
        {experience?.length > 0 && (
          <li className="nav__list-item">
            <a href="#experience" onClick={closeNav} className="nav__link">
              Experience
            </a>
          </li>
        )}

        {projects?.length > 0 && (
          <li className="nav__list-item">
            <a href="#projects" onClick={closeNav} className="nav__link">
              Projects
            </a>
          </li>
        )}

        {skills && (
          <li className="nav__list-item">
            <a href="#skills" onClick={closeNav} className="nav__link">
              Skills
            </a>
          </li>
        )}

        {contact?.email && (
          <li className="nav__list-item">
            <a href="#contact" onClick={closeNav} className="nav__link nav__link--cta">
              Contact
            </a>
          </li>
        )}
      </ul>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
