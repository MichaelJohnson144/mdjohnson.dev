'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';

export default function Body() {
  return (
    <div
      className={
        'mx-2 my-6 border-4 border-[#FFF1FA]/70 bg-black/30 p-2 font-open-sans tracking-wide text-white sm:mx-0 sm:text-left lg:my-8 lg:text-xl'
      }
    >
      <p>
        Are you looking for a flexible and responsive full-stack developer who's meticulous about
        well-tested clean code, excellent software functionality, responsive web design, beautiful
        aesthetics, good documentation, and exceptional customer service and satisfaction? Great!
      </p>
      <p className={'my-8'}>
        Born and raised in Poudroyen, Guyana, and located in New York City, I'm a freelance
        full-stack developer who takes pride in my inquisitive aforesaid and prefers simplicity to
        extravagance as I believe it's the highest form of elegance.
      </p>
      <p>
        Also, contrary to the traditional approach, I enjoy spending some leisure drawing using the
        <Link
          href={'https://www.desmos.com/calculator/ljan6yftky'}
          rel={'noreferrer'}
          target={'_blank'}
          title={'From a Boy to a Man'}
        >
          &nbsp;"paintbrush&nbsp;
          <FontAwesomeIcon
            beatFade={true}
            className={'text-sm text-pink-400 sm:text-base'}
            icon={faPaintbrush}
          />
          &nbsp;of math"&nbsp;
        </Link>
        on "graphical canvases;" it's one of my favorite hobbies.
      </p>
    </div>
  );
}
