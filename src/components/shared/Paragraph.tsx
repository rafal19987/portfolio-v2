import { TextTypes } from '@/types/types';

const Paragraph = ({ text }: TextTypes) => {
  return <p className="text-base md:text-md lg:text-lg xl:text-xl">{text}</p>;
};

export default Paragraph;
