import Heading from './Contents/Heading';
import SubHeading from './Contents/SubHeading';
import ProjectImage from './Contents/Image';
import Body from './Contents/Body';
import DescriptionList from './Contents/DescriptionList';

export default function MyWebsite() {
  return (
    <div
      className={
        'relative mx-4 h-full overflow-hidden rounded-lg bg-[#FFF1FA]/70 p-6 drop-shadow-[0_0px_10px_rgba(219,112,147,0.6)] backdrop-blur md:mx-0 lg:p-8'
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
          'absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-800 drop-shadow-[0_0px_10px_rgba(219,112,147,1)]'
        }
      />
    </div>
  );
}
