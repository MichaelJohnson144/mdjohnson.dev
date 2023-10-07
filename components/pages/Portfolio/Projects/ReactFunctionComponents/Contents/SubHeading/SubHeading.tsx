import Link from 'next/link';
import Image from 'next/image';
import getCFDBaseURL from 'config/getCFDBaseURL';

export default function SubHeading() {
  return (
    <div className={'mt-2 flex flex-row items-center space-x-2'}>
      <h2 className={'text-left font-open-sans text-white'}>Powered by Vite</h2>
      <Link href={'https://vitejs.dev/'} rel={'noreferrer'} target={'_blank'}>
        <Image
          alt={'Vite'}
          height={24}
          priority={true}
          quality={100}
          src={getCFDBaseURL('/assets/images/vite-logomark.svg')}
          width={24}
        />
      </Link>
    </div>
  );
}
