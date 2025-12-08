import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <p className="footer__text">
        Designed & Built by{' '}
        <a
          href="https://github.com/Rydl3r"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Ivan Mukoied
        </a>
      </p>
      <p className="footer__copyright">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
