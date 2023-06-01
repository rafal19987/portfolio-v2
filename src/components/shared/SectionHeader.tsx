import { TextTypes } from '@/types/types';

const SectionHeader = ({ text }: TextTypes) => {
  return <h2 className="text-lg text-[var(--secondary-text-color)]">{text}</h2>;
};

export default SectionHeader;
