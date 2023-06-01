'use client';

import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState({ width: window.innerWidth });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth({ width: window.innerWidth });
    });
  }, []);

  return windowWidth;
}
