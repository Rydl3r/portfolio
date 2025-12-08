import PropTypes from 'prop-types';

const SectionHeader = ({ title, subtitle }) => (
  <>
    <h2 className="section__title">{title}</h2>
    {subtitle && <p className="section__subtitle">{subtitle}</p>}
  </>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SectionHeader;
