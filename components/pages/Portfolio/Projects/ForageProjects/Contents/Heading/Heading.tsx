import Link from 'next/link';

export default function Heading() {
  return (
    <Link
      href={'https://github.com/MichaelJohnson144/forage-projects'}
      rel={'noreferrer'}
      target={'_blank'}
    >
      <h1
        className={
          'text-left font-medium text-white drop-shadow-[0_0px_10px_rgba(20,68,20,1)] sm:text-white sm:drop-shadow-none'
        }
      >
        Forage Projects
      </h1>
    </Link>
  );
}
