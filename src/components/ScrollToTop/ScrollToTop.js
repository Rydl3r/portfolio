import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useScrollVisibility } from '../../hooks';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const isVisible = useScrollVisibility(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.scrollTop} ${isVisible ? styles.visible : ''}`}
      aria-label="scroll to top"
    >
      <ArrowUpwardIcon />
    </button>
  );
};

export default ScrollToTop;
