import PropTypes from 'prop-types';

const TechPillList = ({ items, className }) => (
  <ul className={`tech-pill-list ${className || ''}`}>
    {items.map((item, idx) => (
      <li key={idx} className="pill">
        {item}
      </li>
    ))}
  </ul>
);

TechPillList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default TechPillList;
