'use client';

import Link from 'next/link';
import { routeTypes } from '@/types/types';
import { usePathname } from 'next/navigation';

const DesktopNavItem = ({ reference, description }: routeTypes) => {
  const pathname = usePathname();

  return (
    <li className={`relative`}>
      <Link
        className={`${
          pathname === reference && 'navActiveLink'
        } navLink md:text-md lg:text-lg xl:text-xl `}
        href={reference}
      >
        {description}
      </Link>
    </li>
  );
};

export default DesktopNavItem;
