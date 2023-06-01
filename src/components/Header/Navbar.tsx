import Link from 'next/link';
import DesktopNavItem from './DesktopNavItem';
import { routes } from '@/routes/routes';
import { routeTypes } from '@/types/types';

const Navbar = () => {
  return (
    <nav className="w-full h-full">
      <ul className="flex items-center justify-evenly w-full h-full">
        {routes.map(({ reference, description }: routeTypes) => (
          <DesktopNavItem
            key={description}
            reference={reference}
            description={description}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
