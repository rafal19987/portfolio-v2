import Avatar from '@/components/Home/Avatar';
import Content from '@/components/Home/Content';
import Button from '@/components/Home/Button';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex items-center justify-center mt-8 w-48 h-48 rounded-full">
        <Avatar />
      </div>
      <div className="w-4/5 mt-8 lg:mt-14 lg:w-3/5 overflow-hidden">
        <Content />
      </div>
      <div className="w-4/5 mt-20 mb-20 lg:mt-14 lg:w-3/5">
        <div className="flex items-center justify-start w-full h-full">
          <Button text="Download my resume" />
        </div>
      </div>
    </div>
  );
}
