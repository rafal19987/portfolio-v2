import Header from '@/components/Header/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio',
  name: 'viewport',
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
        <main className="w-screen h-full 2xl:px-72 text-[var(--primary-text-color)] ">
          {children}
        </main>
      </body>
    </html>
  );
}
