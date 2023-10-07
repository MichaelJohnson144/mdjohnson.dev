'use client';

import { useRef } from 'react';
import useTyped from '../useTyped';

/* Define the options for the `Typed.js`
 instance outside the component to avoid recreating them on every render: */
const typedOptions = {
  strings: ['A Full-Stack Developer'],
  typeSpeed: 20,
  startDelay: 1400,
  backSpeed: 20,
  backDelay: 50,
  showCursor: false,
};

export default function SubHeading() {
  const inputElSubHeading = useRef<HTMLHeadingElement>(null);
  useTyped({ ref: inputElSubHeading, options: typedOptions });

  return (
    <h2
      className={'font-open-sans py-2 text-xl font-bold text-white sm:text-4xl'}
      ref={inputElSubHeading}
    />
  );
}
