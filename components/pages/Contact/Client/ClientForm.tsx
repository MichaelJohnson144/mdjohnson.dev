'use client';

import dynamic from 'next/dynamic';

import Loading from 'app/(pages)/contact/loading';

const Form = dynamic(() => import('../../../Form/Form'), {
  loading: () => <Loading />,
});

export default function ClientForm() {
  return (
    <div className={'flex min-h-screen items-center justify-center'}>
      <Form />
    </div>
  );
}
