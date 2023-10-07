'use client';

import { useRef } from 'react';
import useTyped from '../useTyped';

/* Define the options for the `Typed.js`
 instance outside the component to avoid recreating them on every render: */
const typedOptions = {
  strings: ["I'm Michael"],
  typeSpeed: 40,
  startDelay: 300,
  backSpeed: 40,
  backDelay: 50,
  showCursor: false,
};

export default function Heading() {
  const inputElHeading = useRef<HTMLSpanElement>(null);
  useTyped({ ref: inputElHeading, options: typedOptions });

  return (
    <h1 className={'mb-2 text-5xl text-white sm:mb-6 sm:text-8xl'}>
      Hi,{' '}
      <span className={'inline-block bg-[#FFF1FA]/70 px-2.5 text-pink-900'} ref={inputElHeading} />
    </h1>
  );
}
