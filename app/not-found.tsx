'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Button from 'ui/Button';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className={'grid min-h-screen place-content-center bg-gray-800'}>
      <div className={'flex flex-col gap-y-14'}>
        <FontAwesomeIcon
          className={'text-8xl text-yellow-400 sm:text-9xl'}
          icon={faTriangleExclamation}
        />
        <h1 className={'font-helvetica-now-display text-5xl font-bold text-slate-200 sm:text-6xl'}>
          404 Not Found
        </h1>
        <p className={'text-lg tracking-wide text-slate-200'}>
          The Server Could Not Find the Requested Resource
        </p>
      </div>
      <div className={'mt-14 flex items-center justify-center gap-x-8'}>
        <Button
          aria-label={'goBack'}
          className={'rounded p-2 font-helvetica-now-display font-bold text-emerald-500'}
          color={'emerald'}
          id={'goBack'}
          name={'goBack'}
          onClick={() => router.back()}
          size={'large'}
          variant={'contained'}
        >
          Go Back
        </Button>
      </div>
    </section>
  );
}
