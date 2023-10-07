import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia() {
  return (
    <div className={'mb-2 mt-4 flex space-x-6 md:my-0 md:space-x-10'}>
      <Link
        aria-label={'LinkedIn logomark link'}
        className={'flex items-center'}
        href={'https://www.linkedin.com/in/michael-johnson-88ba77a8/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <FontAwesomeIcon className={'text-2xl text-[#0077B5]'} icon={faLinkedin} />
      </Link>
      <Link
        aria-label={'GitHub logomark link'}
        className={'flex items-center'}
        href={'https://github.com/MichaelJohnson144'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <FontAwesomeIcon className={'text-2xl text-white'} icon={faGithub} />
      </Link>
    </div>
  );
}
