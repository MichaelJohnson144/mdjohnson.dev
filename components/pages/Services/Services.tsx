import Heading from './Contents/Heading';
import SubHeading from './Contents/SubHeading';
import BackEndServices from './BackEndServices';
import FrontEndServices from './FrontEndServices/FrontEndServices';

export default function Services() {
  return (
    <section className={'min-h-screen bg-services bg-cover bg-center'}>
      <div className={'flex min-h-screen items-center justify-center'}>
        <div
          className={
            'mx-4 mb-[1.2rem] mt-[4.4rem] grid grid-flow-row-dense place-items-center gap-y-4 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] sm:mx-6 sm:mb-[1.5rem] sm:mt-20 sm:gap-y-6 lg:mx-7 xl:mb-0 xl:mt-[3.25rem] xl:grid-flow-col-dense xl:gap-6 2xl:gap-7'
          }
        >
          <div
            className={
              'grid h-full place-items-center bg-white/30 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] backdrop-blur-3xl backdrop-opacity-40 xl:row-span-2'
            }
          >
            <Heading />
            <div className={'flex h-full w-full items-center justify-center bg-zinc-800'}>
              <SubHeading />
            </div>
          </div>
          <BackEndServices />
          <FrontEndServices />
        </div>
      </div>
    </section>
  );
}
