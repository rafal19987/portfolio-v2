'use client';

import { motion as m } from 'framer-motion';
import { Permanent_Marker } from 'next/font/google';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const Content = () => {
  return (
    <>
      <m.h1
        initial={{ x: '40px', opacity: 0 }}
        animate={{ x: '0px', opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-[var(--secondary-text-color)] text-md"
      >
        Hi, my name is
      </m.h1>
      <m.h2
        initial={{ x: '50px', opacity: 0 }}
        animate={{ x: '0px', opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className={`${permamentMarker.className} mt-1 w-full text-2xl text-white`}
      >
        Rafal Izdebski
      </m.h2>
      <m.h3
        initial={{ x: '70px', opacity: 0 }}
        animate={{ x: '0px', opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="realtive mt-4 text-md "
      >
        I am an aspiring Frontend Developer focusing mainly on working with
        React (half-year experience as self-taught). I`m also occasionally
        designing layouts in Figma. My career so far has consisted of working
        with clients as a salesperson.
      </m.h3>
      <m.div
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: '0px', opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.5 }}
        className="absoute w-full h-1 mt-4  bg-gradient-to-r  from-cyan-500/0 via-[var(--green)] to-cyan-0"
      ></m.div>
    </>
  );
};

export default Content;
