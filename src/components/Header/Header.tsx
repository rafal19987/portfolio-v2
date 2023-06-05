'use client';

import Logo from './Logo';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import { motion as m } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex items-center justify-between w-screen h-20 border-b-2 border-[var(--dark-blue)] ">
      <m.div
        initial={{ y: '50vh', x: 'calc(50vw - 3.5rem)', scale: 8 }}
        animate={{ y: '0', x: '0', scale: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="relative flex items-center justify-center w-12 h-12 ml-8  "
      >
        <Logo />
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.5 }}
        className="hidden w-3/5 h-full ml-9 lg:ml-20 2xl:ml-auto 2xl:mr- md:block"
      >
        <Navbar />
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.5 }}
        className="block w-12 h-10 mr-8 md:hidden"
      >
        <Hamburger />
      </m.div>
    </header>
  );
};

export default Header;
