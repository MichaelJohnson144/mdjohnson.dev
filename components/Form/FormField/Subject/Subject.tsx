import { useFormContext, Controller } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FocusEvent, ChangeEvent } from 'react';

import { CustomTextField } from '../CustomTextField';

export default function Subject() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={null}
      name={'subject'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          autoComplete={'on'}
          className={'!w-full'}
          error={!!errors.subject}
          helperText={errors.subject ? 'Please enter a subject' : null}
          id={'subject'}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-2xl !text-pink-400 sm:!text-3xl'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Subject *'}
          placeholder={'Subject'}
          {...register('subject', {
            onBlur: (event: FocusEvent<HTMLInputElement>) => event,
            onChange: (event: ChangeEvent<HTMLInputElement>) => event,
            pattern: /.+/g,
            required: true,
            value: value,
          })}
          type={'text'}
          variant={'outlined'}
        />
      )}
    />
  );
}
