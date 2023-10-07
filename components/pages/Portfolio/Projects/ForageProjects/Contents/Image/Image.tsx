import Link from 'next/link';
import Image from 'next/image';
import getCFDBaseURL from 'config/getCFDBaseURL';

export default function ProjectImage() {
  return (
    <div className={'shrink-0'}>
      <Link href={'https://www.theforage.com/'} rel={'noreferrer'} target={'_blank'}>
        <Image
          alt={'Forage'}
          className={'hidden sm:inline-block'}
          height={56}
          priority={true}
          quality={100}
          src={getCFDBaseURL('/assets/images/forage-logotype.svg')}
          width={217}
        />
      </Link>
    </div>
  );
}
