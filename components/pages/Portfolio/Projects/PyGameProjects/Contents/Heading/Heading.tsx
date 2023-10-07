import Link from 'next/link';

export default function Heading() {
  return (
    <Link
      href={'https://github.com/MichaelJohnson144/pygame-projects'}
      rel={'noreferrer'}
      target={'_blank'}
    >
      <h1
        className={
          'text-left font-medium text-[#CAE528] drop-shadow-[0_0px_10px_rgba(19,217,28,1)] sm:text-white sm:drop-shadow-none'
        }
      >
        PyGame Projects
      </h1>
    </Link>
  );
}
