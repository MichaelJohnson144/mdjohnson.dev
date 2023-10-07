import FullStack from './Client/FullStack';

export default function TechStack() {
  return (
    <section className={'min-h-screen bg-about bg-cover bg-center'}>
      <div className={'flex min-h-screen items-center justify-center bg-black/75'}>
        <div
          className={
            'mt-[3.25rem] grid grid-cols-3 place-items-center gap-20 sm:gap-x-40 sm:gap-y-10 md:gap-x-56 lg:grid-cols-5 lg:gap-x-28 lg:gap-y-40 xl:gap-x-44 2xl:gap-x-60'
          }
        >
          <FullStack />
        </div>
      </div>
    </section>
  );
}
