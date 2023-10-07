import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'}>
      <h2 className={'ml-2 font-black text-white lg:ml-0'}>
        Michael
        <span className={'mx-1.5'} />
        Johnson
      </h2>
    </Link>
  );
}
