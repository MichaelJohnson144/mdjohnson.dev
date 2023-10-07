import { memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import CallToAction from './CallToAction';
import Name from './Name';
import Email from './Email';
import Subject from './Subject';
import Message from './Message';
import Button from '../../ui/Button/Button';

interface FormFieldProp {
  isLoading: boolean;
}

/* Memorize the `FormField` component to preempt superfluous re-renders,
 and trigger its re-render exclusively in the event of modifications to the props of its child components: */
export default memo(function FormField({ isLoading }: FormFieldProp) {
  return (
    <div
      className={
        'z-10 w-11/12 rounded-2xl bg-black/30 p-4 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] backdrop-blur xl:w-fit'
      }
    >
      <CallToAction />
      <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
        <div className={'flex flex-col space-y-4'}>
          <Name />
          <div className={'w-full space-y-4 sm:flex sm:space-y-0'}>
            <Email />
            <span className={'sm:mx-2'} />
            <Subject />
          </div>
          <Message />
          <Button
            aria-label={'Submit the form'}
            className={'bg-pink-400 px-[16px] py-[6px] !text-black hover:bg-pink-500'}
            color={'inherit'}
            disabled={isLoading}
            id={'submitButton'}
            name={'submitButton'}
            type={'submit'}
            variant={'contained'}
          >
            {isLoading ? (
              <>
                <CircularProgress className={'text-black'} size={20} />
                <span className={'mx-1'} />
                SUBMITTING
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span className={'mx-1'} />
                SUBMIT
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
});
