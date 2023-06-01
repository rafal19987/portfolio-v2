import Logo from './Logo';
import Navbar from './Navbar';
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <header className="flex items-center justify-between w-screen h-20 border-b-2 border-[var(--dark-blue)] 2xl:px-72">
      <div className="flex items-center justify-center w-fit h-full ml-8 2xl:ml-0">
        <Logo />
      </div>
      <div className="hidden w-3/5 h-full ml-9 lg:ml-20 2xl:ml-auto 2xl:mr- md:block">
        <Navbar />
      </div>
      <div className="block w-12 h-10 mr-8 md:hidden">
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
