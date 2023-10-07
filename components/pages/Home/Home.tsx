import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

import Video from './Video';
import Heading from './Client/Heading';
import SubHeading from './Client/SubHeading';
import Button from 'ui/Button';

export default function Home() {
  return (
    <section className={'flex min-h-screen flex-col items-center justify-center'}>
      <Video />
      <div className={'inline-block drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
        <Heading />
        <SubHeading />
      </div>
      <div className={'fixed inset-x-0 bottom-0 flex flex-col items-center'}>
        <p
          className={
            'mb-1 font-medium text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] sm:mb-2 sm:text-2xl'
          }
        >
          WILLING TO HIRE ME?
        </p>
        <Link aria-label={'Navigate to the contact me page'} href={'/contact'}>
          <Button aria-label={'Contact Me'} id={'contactMe'} name={'contactMe'} variant={null}>
            <FontAwesomeIcon
              className={
                'text-xl text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] transition-all duration-200 ease-in-out hover:text-2xl hover:text-pink-600 sm:text-2xl hover:sm:text-3xl'
              }
              icon={faAddressCard}
            />
          </Button>
        </Link>
      </div>
    </section>
  );
}
