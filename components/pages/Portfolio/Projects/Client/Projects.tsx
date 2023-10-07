'use client';

import MyWebsite from '../MyWebsite';
import ReactComponents from '../ReactFunctionComponents';
import PyGameProjects from '../PyGameProjects';
import ForageProjects from '../ForageProjects';

export default function Projects() {
  return (
    <div className={'flex min-h-screen items-center justify-center bg-black/[55%]'}>
      <div
        className={
          'mb-4 mt-[4.4rem] grid grid-cols-1 place-items-center gap-y-4 md:mb-[2.4rem] md:mt-[5.6rem] md:gap-y-9 lg:mb-[3.4rem] lg:mt-[6.4rem] lg:gap-y-12 xl:mx-6 xl:my-0 xl:mt-[3.25rem] xl:grid-cols-2 xl:gap-6 2xl:mx-0 2xl:gap-12'
        }
      >
        <MyWebsite />
        <ReactComponents />
        <PyGameProjects />
        <ForageProjects />
      </div>
    </div>
  );
}
