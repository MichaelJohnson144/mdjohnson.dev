import Body from './Contents/Body';
import DescriptionList from './Contents/DescriptionList';
import Heading from './Contents/Heading';
import ProjectImage from './Contents/Image';
import SubHeading from './Contents/SubHeading';

export default function PyGameProjects() {
  return (
    <div
      className={
        'relative mx-4 h-full overflow-hidden rounded-lg bg-black/[55%] p-6 drop-shadow-[0_0px_10px_rgba(8,223,28,0.6)] backdrop-blur md:mx-0 lg:p-8'
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
          'absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-lime-300 via-lime-500 to-lime-600 drop-shadow-[0_0px_10px_rgba(19,217,28,1)]'
        }
      />
    </div>
  );
}
