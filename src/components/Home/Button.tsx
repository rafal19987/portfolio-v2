'use client';

import { motion as m } from 'framer-motion';

const Button = ({ text }: { text: string }) => {
  return (
    <m.button
      initial={{ y: '40px', opacity: 0 }}
      animate={{ y: '0px', opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="w-fit h-full py-4 px-8 border border-[var(--green)] text-[var(--secondary-text-color)]  hover:bg-[var(--dark-blue)] transition-colors duration-300 animate-bounce"
    >
      {text}
    </m.button>
  );
};

export default Button;
