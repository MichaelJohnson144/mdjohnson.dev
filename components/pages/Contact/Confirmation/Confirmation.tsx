import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Confirmation() {
  return (
    <section className={'min-h-screen bg-contact bg-cover bg-center'}>
      <div className={'flex min-h-screen items-center justify-center bg-black/75'}>
        <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
          <FontAwesomeIcon className={'text-5xl text-pink-400'} icon={faCircleCheck} />
          <div className={'my-6 flex w-screen items-center justify-center'}>
            <span
              className={'grow border-x-0 border-b-4 border-t-0 border-solid border-pink-400'}
            />
            <h1 className={'mx-2 text-4xl font-bold sm:text-6xl'}>
              T H A N K<span className={'mx-4'} />Y O U !
            </h1>
            <span
              className={'grow border-x-0 border-b-4 border-t-0 border-solid border-pink-400'}
            />
          </div>
          <h2 className={'text-xl font-bold tracking-widest sm:text-2xl'}>
            <span className={'text-pink-400'}>Your message</span> has been{' '}
            <span className={'text-pink-400'}>received!</span> I will{' '}
            <span className={'text-pink-400'}>respond</span> within{' '}
            <span className={'text-pink-400'}>2 business days!</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
