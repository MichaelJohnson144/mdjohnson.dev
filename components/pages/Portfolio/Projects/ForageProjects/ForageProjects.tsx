import Heading from './Contents/Heading';
import SubHeading from './Contents/SubHeading';
import ProjectImage from './Contents/Image';
import Body from './Contents/Body';
import DescriptionList from './Contents/DescriptionList';

export default function ForageProjects() {
  return (
    <div
      className={
        'relative mx-4 h-full overflow-hidden rounded-lg bg-black/50 p-6 drop-shadow-[0_0px_10px_rgba(20,76,139,1)] backdrop-blur md:mx-0 lg:p-8'
      }
    >
      <div className={'flex items-center justify-between'}>
        <div>
          <Heading />
          <SubHeading />
        </div>
        <ProjectImage />
      </div>
      <Body />
      <DescriptionList />
      <span
        className={
          'absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 via-[#144C8B] to-[#144C8B] drop-shadow-[0_0px_10px_rgba(18,60,19,1)]'
        }
      />
    </div>
  );
}
