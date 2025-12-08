import { useMemo } from 'react';

/**
 * Custom hook to generate animation delay styles
 * @param {number} index - Item index for staggering
 * @param {number} baseDelay - Base delay in seconds
 * @param {number} categoryIndex - Optional category index for nested staggering
 * @returns {Object} - Style object with animationDelay
 */
const useAnimationDelay = (index, baseDelay = 0.1, categoryIndex = 0) => {
  const style = useMemo(
    () => ({
      animationDelay: `${categoryIndex * baseDelay + index * baseDelay}s`,
    }),
    [index, baseDelay, categoryIndex]
  );

  return style;
};

export default useAnimationDelay;
