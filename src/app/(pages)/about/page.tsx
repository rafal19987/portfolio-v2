import Headline from '@/components/shared/Headline';
import Paragraph from '@/components/shared/Paragraph';
import SectionHeader from '@/components/shared/SectionHeader';
import SkillsList from '@/components/About/SkillsList';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-48 mt-12 py-2 bg-[var(--dark-blue)] rounded-3xl">
        <Headline text="About Me" />
      </div>
      <div className="w-4/5 mt-8 lg:mt-14 lg:w-3/5 ">
        <Paragraph
          text="I am an aspiring Frontend Developer based in Poland looking for opportunities to grow and excel in the field.
I am highly motivated, ambitious, and ready to take on new challenges. Currently, I am expanding my knowledge in TypeScript and Next.js. In free time I like kayaking."
        />
      </div>
      <div className="w-fit mt-16 px-4 py-2 bg-[var(--dark-blue)] lg:mt-24">
        <SectionHeader text="Frontend skills" />
      </div>
      <div className="mt-12 w-4/5 lg:w-3/5 ">
        <SkillsList />
      </div>
    </div>
  );
};

export default Page;
