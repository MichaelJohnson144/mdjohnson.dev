import Link from 'next/link';
import Image from 'next/image';
import getCFDBaseURL from 'config/getCFDBaseURL';

export default function ProjectImage() {
  return (
    <div className={'shrink-0'}>
      <Link href={'https://react.dev/'} rel={'noreferrer'} target={'_blank'}>
        <Image
          alt={'React'}
          className={'hidden drop-shadow-[0_0px_10px_rgba(8,126,164,1)] sm:inline-block'}
          height={50}
          priority={true}
          quality={100}
          src={getCFDBaseURL('/assets/images/react-logomark.svg')}
          width={56}
        />
      </Link>
    </div>
  );
}
