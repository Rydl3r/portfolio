import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`scroll-top ${isVisible ? 'visible' : ''}`}>
      <a href='#top'>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  );
};

export default ScrollToTop;
