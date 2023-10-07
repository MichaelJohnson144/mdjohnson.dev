import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import FormField from './FormField/FormField';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm();
  const router = useRouter();

  const handleOnSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/contactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log(response.status, response.statusText, 'Your Form Was Submitted Successfully');
        methods.reset();
        router.push('/contact/confirmation');
      } else {
        console.error(response.status, response.statusText);
      }
    } catch (error: unknown) {
      console.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className={'mt-12 flex items-center justify-center'}
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <FormField isLoading={isLoading} />
      </form>
    </FormProvider>
  );
}
