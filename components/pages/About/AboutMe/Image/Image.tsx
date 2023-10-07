import Image from 'next/image';
import getCFDBaseURL from 'config/getCFDBaseURL';

export default function MyImage() {
  return (
    <div className={'inline-grid place-items-center'}>
      <div
        className={
          'my-6 inline-grid h-52 w-52 items-center justify-center overflow-hidden rounded-full border-4 border-[#FFF1FA]/70 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] lg:my-0 lg:h-auto lg:w-[393px] lg:rounded-none lg:border-none lg:pl-10'
        }
      >
        <Image
          className={'relative bottom-[4.5rem] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] lg:bottom-0'}
          alt={'Michael Johnson'}
          height={741}
          priority={true}
          quality={100}
          src={getCFDBaseURL('/assets/images/me.png')}
          width={393}
        />
      </div>
    </div>
  );
}
