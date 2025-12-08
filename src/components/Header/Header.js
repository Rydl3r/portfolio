import { header } from '../../data';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  const { title } = header;

  return (
    <header className="header">
      <div className="header__container">
        <a href="#about" className="header__logo">
          {title}
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
