import Image from 'next/image';
import dot from '@/assets/dot.svg';

const SkillsItem = ({ skill }: { skill: string }) => {
  return (
    <li
      className="flex items-center w-fit h-8 text-[var(--secondary-text-color)]"
      key={skill}
    >
      <Image src={dot} width={10} height={10} alt="dot icon" />
      <span className="ml-2 text-[var(--primary-text-color)]">{skill}</span>
    </li>
  );
};

export default SkillsItem;
