import { useEffect, useState, useCallback } from 'react';

/**
 * Custom hook to track scroll visibility
 * @param {number} threshold - Scroll position threshold to trigger visibility
 * @returns {boolean} - Whether the element should be visible
 */
const useScrollVisibility = (threshold = 500) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  return isVisible;
};

export default useScrollVisibility;
