import Image from 'next/image';
import avatar from '@/assets/avatar.png';
import { Permanent_Marker } from 'next/font/google';
import Paragraph from '@/components/shared/Paragraph';

const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center mt-8 w-48 h-48 rounded-full">
        <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/30 to-[var(--green)] -z-10 animate-spin-slow "></div>
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            style={{ objectFit: 'contain' }}
            src={avatar}
            alt="Picture of the author"
            priority={true}
          />
        </div>
      </div>
      <div className="w-4/5 mt-8 lg:mt-14 lg:w-3/5 ">
        <h1 className="text-[var(--secondary-text-color)] text-md">
          Hi, my name is
        </h1>
        <h2
          className={`${permamentMarker.className} mt-1 w-full text-2xl text-white`}
        >
          Rafal Izde
          <span className="relative w-fit text-[var(--body-bg-color)]">
            bski
            <div className="absolute top-0 right-0 w-full h-full bg-[var(--secondary-text-color)] opacity-60 -z-10"></div>
          </span>
        </h2>
        <h3 className="realtive mt-4 text-md ">
          I am an aspiring Frontend Developer focusing mainly on working with
          React (half-year experience as self-taught). I`m also occasionally
          designing layouts in Figma. My career so far has consisted of working
          with clients as a salesperson.
        </h3>
        <div className="absoute w-full h-1 mt-4  bg-gradient-to-r  from-cyan-500/0 via-[var(--green)] to-cyan-0"></div>
      </div>
      <div className="w-4/5 mt-20 mb-20 lg:mt-14 lg:w-3/5">
        <div className="flex items-center justify-start w-full h-full">
          <button className="w-fit h-full py-4 px-8 border border-[var(--green)] text-[var(--secondary-text-color)]  hover:bg-[var(--dark-blue)] transition-colors duration-300">
            Download my resume
          </button>
        </div>
      </div>
    </div>
  );
}
