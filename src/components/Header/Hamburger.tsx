'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Span from './Span';

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenuHandle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-between w-full h-full p-2 bg-[var(--dark-blue)] rounded-lg hover:cursor-pointer"
        onClick={toggleMenuHandle}
      >
        <Span isMenuOpen={isMenuOpen} />
      </div>
      <div className="relative">
        <MobileMenu isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
};

export default Hamburger;
