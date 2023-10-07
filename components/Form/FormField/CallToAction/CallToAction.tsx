export default function CallToAction() {
  return (
    <section className={'mb-4 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
      <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.2)]'}>
        <div className={'mb-4 flex items-center justify-center'}>
          <span className={'grow border-x-0 border-b-4 border-t-0 border-solid border-pink-400'} />
          <h1 className={'mx-2 text-4xl sm:text-5xl'}>C O N T A C T</h1>
          <span className={'grow border-x-0 border-b-4 border-t-0 border-solid border-pink-400'} />
        </div>
        <p className={'font-open-sans tracking-widest sm:text-lg'}>
          INTERESTED IN{' '}
          <span className={'rounded-sm bg-pink-400 px-0.5 text-black'}>BOOKING ME? GREAT!</span>{' '}
          THEN PLEASE{' '}
          <span className={'rounded-sm bg-pink-400 px-0.5 text-black'}>
            FILL OUT THE FORM BELOW
          </span>{' '}
          AND WE WILL{' '}
          <span className={'rounded-sm bg-pink-400 px-0.5 text-black'}>GET IN TOUCH</span> SHORTLY
        </p>
      </div>
    </section>
  );
}
