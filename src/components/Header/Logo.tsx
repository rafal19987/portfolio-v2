'use client';

import Image from 'next/image';
import logo from '@/assets/logo.svg';

const Logo = () => {
  return <Image src={logo} fill={true} alt="logo icon" />;
};

export default Logo;
