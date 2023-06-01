'use client';

import Image from 'next/image';
import logo from '@/assets/logo.svg';
import useWindowWidth from '@/hooks/useWindowWidth';

const Logo = () => {
  const { width } = useWindowWidth();

  return (
    <Image
      src={logo}
      width={width > 767 ? 50 : 40}
      height={width > 767 ? 50 : 40}
      alt="logo icon"
    />
  );
};

export default Logo;
