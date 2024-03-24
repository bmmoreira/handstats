import { useState, useEffect } from 'react';

/**
 * Gets the current window dimensions.
 *
 * @returns {Object} An object containing the width and height of the window.
 */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

/**
 * A custom hook that tracks and returns the dimensions of the window.
 *
 * @returns {Object} An object containing the width and height of the window.
 */
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
