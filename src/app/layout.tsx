'use client';

import Header from '@/components/Header/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { motion as m } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--body-bg-color)]`}>
        <Header />
        <m.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.5 }}
          className="w-screen h-full 2xl:px-72 text-[var(--primary-text-color)] "
        >
          {children}
        </m.main>
      </body>
    </html>
  );
}
