import Link from 'next/link';

export default function Heading() {
  return (
    <Link
      href={'https://github.com/MichaelJohnson144/react-function-components'}
      rel={'noreferrer'}
      target={'_blank'}
    >
      <h1
        className={
          'text-left font-medium text-[#61DAFB] drop-shadow-[0_0px_10px_rgba(8,126,164,1)] sm:text-white sm:drop-shadow-none'
        }
      >
        React Function Components
      </h1>
    </Link>
  );
}
