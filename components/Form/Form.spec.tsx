import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockUseRouter } from 'utils/__mocks__/mockUseRouter';
import Form from './Form';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('react-hook-form', () => ({
  // This line is needed to keep the other exports from 'react-hook-form' working
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    register: jest.fn(),
    formState: { errors: {} },
  }),
}));

interface MockIsLoadingProp {
  isLoading: boolean;
}

jest.mock('./FormField/FormField', () => {
  return function MockFormField({ isLoading }: MockIsLoadingProp) {
    const { register } = useFormContext();

    return (
      <>
        <label>
          Full Name *
          <input id={'fullName'} type={'text'} {...register('fullName')} />
        </label>
        <label>
          Email *
          <input id={'email'} type={'text'} {...register('email')} />
        </label>
        <label>
          Subject *
          <input id={'subject'} type={'text'} {...register('subject')} />
        </label>
        <label>
          Message *
          <textarea id={'message'} {...register('message')} />
        </label>
        <button disabled={isLoading} id={'submitButton'} name={'submitButton'} type={'submit'}>
          {isLoading ? 'SUBMITTING' : 'SUBMIT'}
        </button>
      </>
    );
  };
});

(global.fetch as jest.Mock) = jest.fn().mockImplementationOnce(
  () =>
    new Promise<Response>((resolve) =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            status: 200,
            statusText: 'OK:',
            json: () => Promise.resolve({ status: 200, statusText: 'OK:' }),
          } as Response),
        500,
      ),
    ),
);

describe('Form component', () => {
  let mockRouter;
  beforeEach(() => {
    mockRouter = mockUseRouter({
      route: '/contact',
      pathname: '/contact',
      push: jest.fn(),
    });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test that the component renders successfully:
  it('should render a form component successfully', async () => {
    const user = userEvent.setup();

    render(<Form />);
    const fullName = screen.getByLabelText('Full Name *');
    const email = screen.getByLabelText('Email *');
    const subject = screen.getByLabelText('Subject *');
    const message = screen.getByLabelText('Message *');
    const submitButton = screen.getByRole('button', { name: 'SUBMIT' });
    await user.type(fullName, 'John Doe');
    await user.type(email, 'johndoe@example.com');
    await user.type(subject, 'Test Subject');
    await user.type(message, 'This is a mock message');
    await user.click(submitButton);
    await waitFor(() => expect(submitButton).toHaveTextContent('SUBMITTING'));
    await waitFor(() => expect(mockRouter.push).toHaveBeenCalledTimes(1));
    console.log('Response object:', (global.fetch as jest.Mock).mock.calls[0][1]);
    expect(mockRouter.push).toHaveBeenCalledWith('/contact/confirmation');
  });
});
