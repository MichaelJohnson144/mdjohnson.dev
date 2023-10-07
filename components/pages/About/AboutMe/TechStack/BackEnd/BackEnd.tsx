import Link from 'next/link';
import Image from 'next/image';

import { backEndTechStack } from '../utils/backEndTechStack';

export default function BackEnd() {
  return (
    <>
      {backEndTechStack.map((technology) => (
        <div key={technology.name}>
          <Link
            className={'flex flex-col items-center justify-center'}
            href={technology.link}
            rel={'noreferrer'}
            target={'_blank'}
          >
            <Image
              className={'h-[54px] w-[68px] sm:h-[68px] sm:w-[85px] lg:h-[82px] lg:w-[102px]'}
              alt={technology.name}
              height={54}
              priority={true}
              quality={100}
              src={technology.imageSrc}
              width={68}
            />
          </Link>
          <div className={'mt-4 rounded-full bg-[#FFF1FA]/70'}>
            <div
              className={`p-0.5 ${technology.progressBarLimit} bg-gradient-to-r text-center ${technology.gradientColorFrom} ${technology.gradientColorTo} rounded-full`}
            >
              <p className={`font-helvetica-now-display text-xs font-bold ${technology.textColor}`}>
                {technology.progress}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
