import Heading from './Contents/Heading';
import SubHeading from './Contents/SubHeading';
import ProjectImage from './Contents/Image';
import Body from './Contents/Body';
import DescriptionList from './Contents/DescriptionList';

export default function ReactComponents() {
  return (
    <div
      className={
        'relative mx-4 h-full overflow-hidden rounded-lg bg-[#002F4D]/30 p-6 drop-shadow-[0_0px_10px_rgba(8,126,164,0.6)] backdrop-blur md:mx-0 lg:p-8'
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
          'absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 drop-shadow-[0_0px_10px_rgba(8,126,164,1)]'
        }
      />
    </div>
  );
}
