import Image from 'next/image';
import logo from '@/assets/logo.svg';
import animated2 from '@/assets/animated2.svg';

const Logo = () => {
  return (
    <Image
      className="absolute"
      src={logo}
      fill={true}
      alt="logo icon"
      priority={true}
    />
  );
};

export default Logo;
