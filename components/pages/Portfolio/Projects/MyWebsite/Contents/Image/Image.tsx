import Link from 'next/link';

export default function ProjectImage() {
  return (
    <div className={'shrink-0'}>
      <Link
        href={'https://github.com/MichaelJohnson144/mdjohnson.dev'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <h2
          className={
            'hidden font-amsterdam-four drop-shadow-[0_0px_10px_rgba(219,112,147,1)] sm:inline-block'
          }
        >
          M.D.Johnson.dev
        </h2>
      </Link>
    </div>
  );
}
