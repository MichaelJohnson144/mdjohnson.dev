import Link from 'next/link';
import Image from 'next/image';
import getCFDBaseURL from 'config/getCFDBaseURL';

export default function SubHeading() {
  return (
    <div className={'mt-2 flex flex-row items-center space-x-2'}>
      <h2 className={'text-left font-open-sans text-white'}>Powered by Python</h2>
      <Link href={'https://www.python.org/psf/trademarks/'} rel={'noreferrer'} target={'_blank'}>
        <Image
          alt={'Python'}
          height={24}
          priority={true}
          quality={100}
          src={getCFDBaseURL('/assets/images/python-logomark.svg')}
          width={24}
        />
      </Link>
    </div>
  );
}
