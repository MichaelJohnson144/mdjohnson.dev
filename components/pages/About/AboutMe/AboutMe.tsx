import MyImage from './Image';
import Heading from './Contents/Heading/Heading';
import Body from './Contents/Client/Body';
import SubHeading from './Contents/SubHeading/SubHeading';

export default function AboutMe() {
  return (
    <div className={'flex min-h-screen items-center justify-center bg-black/75'}>
      <div
        className={
          'mt-[3.25rem] flex flex-col items-center justify-center lg:grid lg:grid-flow-col-dense lg:gap-10'
        }
      >
        <MyImage />
        <div className={'mb-6 sm:mx-10 sm:px-0 md:py-0 lg:mb-0 lg:ml-0 lg:mr-10'}>
          <Heading />
          <Body />
          <SubHeading />
        </div>
      </div>
    </div>
  );
}
