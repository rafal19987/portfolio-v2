import { routes } from '@/routes/routes';
import { routeTypes } from '@/types/types';
import MobileMenuItems from './MobileMenuItems';
import Link from 'next/link';

const MobileMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <div>
      {isMenuOpen ? (
        <div
          className={`absolute left-20 w-screen -translate-x-full h-[calc(100vh-5rem)] translate-y-5 bg-[var(--dark-blue)] text-white z-10  opacity-1 transition-all duration-300 overflow-hidden`}
        >
          <MobileMenuItems isMenuOpen />
        </div>
      ) : (
        <div className="absolute left-20 w-screen -translate-x-full h-0 translate-y-5 bg-[var(--dark-blue)] text-white -z-10 opacity-0 transition-all duration-300 overflow-hidden">
          <MobileMenuItems isMenuOpen />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
