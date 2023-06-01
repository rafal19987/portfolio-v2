import Link from 'next/link';
import { routeTypes } from '@/types/types';

const DesktopNavItem = ({ reference, description }: routeTypes) => {
  return (
    <li className="relative">
      <Link
        className="text-base text-white hover:text-[var(--secondary-text-color)] md:text-md after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:rounded-lg after:bg-[var(--secondary-text-color)] hover:after:w-full  after:transition-all after:duration-300 lg:text-lg xl:text-xl transition-colors duration-300"
        href={reference}
      >
        {description}
      </Link>
    </li>
  );
};

export default DesktopNavItem;
