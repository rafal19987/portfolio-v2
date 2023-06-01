import SkillsItem from './SkillsItem';
import { skills } from '@/constants/skills';

const SkillsList = () => {
  return (
    <ul>
      {skills.map(({ skill }) => (
        <SkillsItem key={skill} skill={skill} />
      ))}
    </ul>
  );
};

export default SkillsList;
