import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { contact, about } from '../../data';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="contact__container">
        <div className="contact__content glass-card">
          <h2 className="contact__title">
            {contact.headline || "Let's Connect"}
          </h2>
          
          <p className="contact__description">
            {contact.description}
          </p>

          <div className="contact__actions">
            <a
              href={`mailto:${contact.email}`}
              className="btn btn--primary contact__email-btn"
            >
              <EmailIcon />
              Say Hello
            </a>
          </div>

          <div className="contact__social">
            {about.social?.github && (
              <a
                href={about.social.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn--icon"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            )}
            {about.social?.linkedin && (
              <a
                href={about.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn--icon"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            )}
          </div>

          <p className="contact__email-text">
            Or email me directly at{' '}
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="contact__decoration contact__decoration--1"></div>
        <div className="contact__decoration contact__decoration--2"></div>
      </div>
    </section>
  );
};

export default Contact;
