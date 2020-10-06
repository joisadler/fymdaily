import { useState, useLayoutEffect } from 'react';

export default () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

// Usage
// const [width, height] = useWindowSize();
// const vh = height * 0.01;
// const vw = width * 0.01;
