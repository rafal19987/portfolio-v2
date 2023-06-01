import { TextTypes } from '@/types/types';

const Headline = ({ text }: TextTypes) => {
  return (
    <h1 className="text-[var(--secondary-text-color)] text-2xl">{text}</h1>
  );
};

export default Headline;
