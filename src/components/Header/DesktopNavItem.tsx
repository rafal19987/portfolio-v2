'use client';

import Link from 'next/link';
import { routeTypes } from '@/types/types';
import { usePathname } from 'next/navigation';
import { motion as m } from 'framer-motion';

const DesktopNavItem = ({ reference, description }: routeTypes) => {
  const pathname = usePathname();

  return (
    <m.li
      initial={{ y: '-40px', opacity: 0 }}
      animate={{ y: '0px', opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.3 }}
      className={`relative`}
    >
      <Link
        className={`${
          pathname === reference && 'navActiveLink'
        } navLink md:text-md lg:text-lg xl:text-xl `}
        href={reference}
      >
        {description}
      </Link>
    </m.li>
  );
};

export default DesktopNavItem;
