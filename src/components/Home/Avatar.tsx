'use client';

import Image from 'next/image';
import avatar from '@/assets/avatar.png';
import { motion as m } from 'framer-motion';

const Avatar = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 2 }}
        className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/30 to-[var(--green)] -z-10 animate-spin-slow "
      ></m.div>
      <m.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="w-40 h-40 rounded-full overflow-hidden"
      >
        <Image
          style={{ objectFit: 'contain' }}
          src={avatar}
          alt="Picture of the author"
          priority={true}
        />
      </m.div>
    </>
  );
};

export default Avatar;
