import Link from 'next/link';

export default function Heading() {
  return (
    <Link
      href={'https://github.com/MichaelJohnson144/mdjohnson.dev'}
      rel={'noreferrer'}
      target={'_blank'}
    >
      <h1
        className={
          'text-left font-medium drop-shadow-[0_0px_10px_rgba(219,112,147,1)] sm:drop-shadow-none'
        }
      >
        mdjohnson.dev
      </h1>
    </Link>
  );
}
