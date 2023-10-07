import Link from 'next/link';
import Image from 'next/image';
import getCFDBaseURL from 'config/getCFDBaseURL';

export default function ProjectImage() {
  return (
    <div className={'shrink-0'}>
      <Link href={'https://www.pygame.org/news'} rel={'noreferrer'} target={'_blank'}>
        <Image
          alt={'PyGame'}
          className={'hidden drop-shadow-[0_0px_10px_rgba(19,217,28,1)] sm:inline-block'}
          height={56}
          priority={true}
          quality={100}
          src={getCFDBaseURL('/assets/images/pygame-logotype.svg')}
          width={200}
        />
      </Link>
    </div>
  );
}
