import { routes } from '@/routes/routes';
import { routeTypes } from '@/types/types';
import Link from 'next/link';

const MobileMenuItems = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <>
      {isMenuOpen ? (
        <ul className="w-full h-full flex flex-col items-center justify-evenly">
          {routes.map(({ reference, description }: routeTypes) => (
            <li key={description}>
              <Link className="text-2xl" href={reference}>
                {description}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="w-full h-full flex flex-col items-center justify-evenly">
          {routes.map(({ reference, description }: routeTypes) => (
            <li key={description}>
              <Link href={reference}>{description}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileMenuItems;
