import { useFormContext, Controller } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FocusEvent, ChangeEvent } from 'react';

import { CustomTextField } from '../CustomTextField';

export default function Email() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={null}
      name={'email'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          autoComplete={'email'}
          className={'!w-full'}
          error={!!errors.email}
          helperText={errors.email ? 'Please enter a valid email address' : null}
          id={'email'}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-2xl !text-pink-400 sm:!text-3xl'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faAt} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Email *'}
          placeholder={'Email'}
          {...register('email', {
            max: 254,
            onBlur: (event: FocusEvent<HTMLInputElement>) => event,
            onChange: (event: ChangeEvent<HTMLInputElement>) => event,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/gim,
            required: true,
            value: value,
          })}
          type={'email'}
          variant={'outlined'}
        />
      )}
    />
  );
}
